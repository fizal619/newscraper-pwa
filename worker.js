'use strict'
const admin = require('firebase-admin')
const request = require('request')
const {NEWSAPI_KEY, MERCURY_KEY, FB_URL} = require('./secrets.json')
const serviceAccount = require('./sa.json')
// const serviceAccount = JSON.parse(SA)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://newscraper-21f8a.firebaseio.com"
})
const database = admin.database();

database.ref('/news').set({})

//fetch sources
request.get(`https://newsapi.org/v2/sources?country=us&language=en&apiKey=${NEWSAPI_KEY}`, (err, response, data) => {
  data = JSON.parse(data)
  let sourcelist = data.sources.map(source=> source.id);
  let final = {length: 0}
  console.log(sourcelist.length, "SOURCES")
  request.get(`https://newsapi.org/v2/top-headlines?pageSize=100&sources=${sourcelist.toString()}&apiKey=${NEWSAPI_KEY}`, (err, response, body) => {
    let data = JSON.parse(body)
    console.log(data.totalResults, "RESULTS")
    data.articles.map((article, articlesIndex) => {
      let options = {
        url: `https://mercury.postlight.com/parser?url=${article.url}`,
        headers: {
          'x-api-key': MERCURY_KEY
        }
      }
      request.get(options, (err, response, scraped) => {
        article['content'] = JSON.parse(scraped)['content']
        
        let tmpArticle = JSON.stringify(article);
        if (final[article.source.id]) {
          final[article.source.id].push(tmpArticle);
        } else {
          final[article.source.id] = [tmpArticle];
        }
        
        final.length++;
        
        if (final.length === data.articles.length) {
          database.ref('/news').set(final)
          .then(snap=>console.log('set!')).catch(r=>console.log(r));
          console.log(final.length, "ITEMS")
        }
      })
    })
  })
})
