# NewScraper

![screen](screenshot.png)

Progressive Web App for reading fresh news offline in the **subway** from various news sources. Open [NewScraper](https://newscraper.surge.sh) on your phone and add it to your homescreen to see the magic!

## Tech Stack

- ~~[Webtask](https://webtask.io)~~
- [PreactJs Starter](https://github.com/lukeed/preact-starter) - for this awesome offline ready boilerplate. [Preact](https://preactjs.com/) isn't that different from React.
- [The NewsApi](http://newsapi.org) - Awesome news aggregation api. I'll definitely expand this app to take full advantage of the many sources here.  
- [Mercury Api](https://mercury.postlight.com/web-parser/) - Amazing time saver, it goes and builds a _readable_ version of whatever article you supply it. _Think pocket/instapaper._
- A cron job on my personal VPS

## Running/Deploying

#### Installation

  - `git clone` this repo
  - `npm install` (or `yarn` if you're hip like me.)

#### Running locally

  - Make sure you have the `MERCURY_KEY` and `NEWS_API` keys in a file called `secrets.json`.
  - If you're working on the worker, save your firebase-admin sevice account as `sa.json`.
  - `npm run watch`

#### Deploying

  - Run `npm run build`, this will spit out the production frontend in `dist` for you to serve on static hosting.



## TODO

- More news sources. √
- Loading bar because I'm masochistic? _(I heard they were super hard.)_
- Transitions between views.
- Refine Service Worker, to make it more reliable. √
- Style for iOS devices (ew but needed, dumb iphone x).
