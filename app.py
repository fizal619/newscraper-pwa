from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS, cross_origin

# from flask import json
from bs4 import BeautifulSoup
from newspaper import Article

import os
import requests

# url = 'https://mercury.postlight.com/parser?url='+link.get('href')
#         print(url)
#         headers = {
#           "Content-Type": "application/json",
#           "x-api-key": "VmRQqLIvvFJXFPgsUTMkGqmVEO9li8xf0VJk5lRM"
#         }
#         r = requests.get(url,headers=headers)
# HN=newspaper.build('https://news.ycombinator.com/')

app = Flask(__name__)
CORS(app)

@app.route("/news")
def news():
  freshNews = []
  source = request.args.get('s')
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

  return jsonify(data["articles"])



@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'You want path: %s' % path


if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)