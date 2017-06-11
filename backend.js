/* express app as a webtask */

const Express = require('express')
const Webtask = require('webtask-tools')
const admin = require('firebase-admin')
const request = require('request')
const serviceAccount = require("./fb.json")

const app = Express()


app.use(require('body-parser').json())

app.post('/', (req, res) => {
  const NEWSAPI_KEY = req.webtaskContext.data.NEWSAPI_KEY
  const MERCURY_KEY = req.webtaskContext.data.MERCURY_KEY
  const NEWSCRAPER_KEY = req.webtaskContext.data.NEWSCRAPER_KEY

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://newscraper-21f8a.firebaseio.com"
  });
  const database = admin.database();

  database.ref('/news').set({})

  //fetch sources
  request.get('https://newsapi.org/v1/sources?language=en', (err, response, data) => {
    data = JSON.parse(data)
    data.sources.map((source, sourcesIndex) => {
      request.get(`https://newsapi.org/v1/articles?source=${source.id}&apiKey=${NEWSAPI_KEY}`, (err, response, body) => {
        body = JSON.parse(body)
        body.articles.map((article, articlesIndex) => {
          let options = {
            url: `https://mercury.postlight.com/parser?url=${article.url}`,
            headers: {
              'x-api-key': MERCURY_KEY
            }
          }
          request.get(options, (err, response, scraped) => {
            try{
              if(scraped) article['content'] = JSON.parse(scraped)['content']
            }catch(e){
              return
            }
            if(!article['content']) return
            // console.log('\nARTICLE', article, '\n\n')
            //send to firebase
            database.ref('news/' + source.id).once('value', snapshot=>{
              if(snapshot.val()){
                console.log('DATA EXISTS')
                database.ref('news/' + source.id).set([article].concat(snapshot.val()))
                .then(snap=>console.log('set!')).catch(r=>console.log(r))
              }else{
                console.log('DATA DOESN\'T EXIST')
                database.ref('news/' + source.id).set([article])
                .then(snap=>console.log('set!')).catch(r=>console.log(r))
              }

              //maybe stop the request cycle?
              if(sourcesIndex == data.sources.length - 1 && articlesIndex == body.articles.length - 1) res.json({message: "done"})

            }).catch(err=>{
              // database.ref('news/' + source.id).set([article])
              // .then(snap=>console.log('set!'))
              console.log('couldn\'t read', err)
            })
          })
        })
      })
    })
  })

})

// expose this express app as a webtask-compatible function
module.exports = Webtask.fromExpress(app)
