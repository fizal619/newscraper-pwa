from flask import Flask, request, send_from_directory
from flask import jsonify
from flask_cors import CORS, cross_origin
from time import sleep, time

import os
import requests


app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app)

cache = {
  "articles": {},
  "sources": []
}

@app.route("/news")
def news():
  print('>>>>>>>>>>>>>>>HIT')
  source = request.args.get('s')
  
  #caching, not the most self explanatory thing 
  if(source in cache["sources"] and time() - cache["articles"][source]["time"] < 3600  ):
    return cache["articles"][source]["data"]

  sleep(1)
  freshNews = []
  r  = requests.get("https://newsapi.org/v1/articles?source="+source+"&sortBy=latest&apiKey="+os.environ.get('NEWSAPI_KEY'))
  data = r.json()
  for article in data["articles"]:
    url = 'https://mercury.postlight.com/parser?url='+article["url"]
    headers = {
      "Content-Type": "application/json",
      "x-api-key": os.environ.get('MERCURY_KEY')
      }
    r = requests.get(url,headers=headers)
    mercury = r.json()
    article["content"] = mercury["content"]
    sleep(0.1)

  cache["sources"].append(source)
  cache["articles"][source] = {
    "data": data["articles"],
    "time": time()
  }

  return jsonify(data["articles"])



@app.errorhandler(404)
def catchall(path):
    return send_from_directory('dist', 'index.html')


if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)