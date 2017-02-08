# NewScraper

Progressive Web App for reading fresh news offline in the **subway** from various (right now only HackerNews) news sources. 

## Tech Stack structure

- Flask
- [PreactJs Starter](https://github.com/lukeed/preact-starter) - for this awesome offline ready boilerplate. [Preact](https://preactjs.com/) isn't that different from React. 
- [The NewsApi](http://newsapi.org) - Awesome news aggregation api. I'll definitely expand this app to take full advantage of the many sources here.  
- [Mercury Api](https://mercury.postlight.com/web-parser/) - Amazing time saver, it goes and builds a _readable_ version of whatever article you supply it. _Think pocket/instapaper._ 
- Sleepless nights trying to find time to do a personal project!!! - I work 7 days a week, tee hee. 

## Running/Deploying
  
#### Installation

  - `git clone this repo`
  - `pip install -r requirements.txt`
  - `cd frontend-src`
  - `npm install` (or `yarn install` if you're hip like me.)

#### Running locally
  
  - Open two terminals at the same directory: `FLASK_APP=app.py flask run`, `cd frontend-src && npm run dev`
  - Make sure you have the `MERCURY_KEY` and `NEWS_API` key environment variables with your respective keys. 

#### Deploying
  
  - Run `npm run build` in the `frontend-src` folder, this will spit out the production frontend in `dist` either for the python app to serve, or for you to serve on static hosting.


## TODO

- More news sources.
- Loading bar because I'm masochistic? _(I heard they were super hard.)_
- Transitions between views.
- Refine Service Worker, to make it more reliable. 
- Style for iOS devices (ew).
