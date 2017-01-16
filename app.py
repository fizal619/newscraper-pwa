from flask import Flask
from flask import jsonify
from bs4 import BeautifulSoup
from newspaper import Article

import os
import requests


# HN=newspaper.build('https://news.ycombinator.com/')

app = Flask(__name__)

@app.route("/news")
def news():
	freshNews = []

	r  = requests.get("https://news.ycombinator.com/")
	data = r.text
	soup = BeautifulSoup(data)

	for link in soup.find_all('a'):
		if len(freshNews) == 20:
			return jsonify(freshNews)
		try:
			if "storylink" in link.get("class"):
				# print(link.get("class"))
				article = Article(link.get("href"))
				article.download()
				article.parse()
				freshNews.append({
					"title": article.title,
					"content": article.text
					})
	

		except Exception as e:
			4+4




if __name__ == '__main__':
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)