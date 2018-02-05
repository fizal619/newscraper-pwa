'use strict'
const admin = require('firebase-admin');
const fetch = require('node-fetch');
const {NEWSAPI_KEY, MERCURY_KEY, FB_URL} = require('./secrets.json');
const serviceAccount = require('./sa.json');
// const serviceAccount = JSON.parse(SA)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://newscraper-21f8a.firebaseio.com"
})
const database = admin.database();

database.ref('/news').set({});

//fetch sources in a promise
const fetchSources = () => new Promise(resolve => {
  fetch(`https://newsapi.org/v2/sources?country=us&language=en&apiKey=${NEWSAPI_KEY}`)
  .then(r=>r.json())
  .then(data=>resolve(data.sources.map(source=> source.id)));
});

const fetchHeadlines = source => new Promise(resolve => {
  fetch(`https://newsapi.org/v2/top-headlines?pageSize=100&sources=${source}&apiKey=${NEWSAPI_KEY}`)
  .then(r=>r.json())
  .then(data=>resolve(data.articles));
});

const scrapeContent = article => new Promise(resolve => { 
  let options = {
    headers: {
      'x-api-key': MERCURY_KEY
    }
  }
  fetch(`https://mercury.postlight.com/parser?url=${article.url}`,options)
  .then(r=>r.json())
  .then(data=> {
    article['content'] = data['content'];
    article['word_count'] = data['word_count'];
    resolve(article);
  })
  .catch(err=>{
    console.log(err);
    resolve(article);
  })
});

//take advantage of the async await cycle to 
//avoid callback hell
async function worker(){
  let sources = await fetchSources();
  console.log('SOURCES', sources.length);
  let articles = {
    length: 0
  };
  console.log('Working on it...');

  for(let i=0; i < sources.length; i++) {
    console.log('trying', sources[i]);
    let tempArticles = await fetchHeadlines(sources[i]);
    console.log(tempArticles.length);
    if(!tempArticles) continue;

    console.log('scraping...');
    let scrapedArticles = [];
    for(let j=0; j < tempArticles.length; j++) {
      let tempArticle = tempArticles[j];
      tempArticle = await scrapeContent(tempArticle);
      if (tempArticle['content']) {
         scrapedArticles.push(JSON.stringify(tempArticle));
      }
    }
    articles[sources[i]] = scrapedArticles;
    articles.length += articles[sources[i]].length;
  }

  database.ref('/news').set(articles)
  .then(snap=>{
    console.log(articles.length, ' items set!');
    process.exit();
  })
  .catch(r=>console.log(r));
}

worker();