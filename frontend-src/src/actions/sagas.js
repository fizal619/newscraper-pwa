import {
  take,
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

//BAD SCOPING IDK. TODO OPTIMIZE
let articles = []
let sources = []

export function* helloSaga() {
  console.log('Hello Sagas!');
}


export async function fetchSources(){
  console.log('in fetch sources');
  let returnData;
  await fetch('https://newsapi.org/v1/sources?language=en&country=us').then(r=>r.json()).then(data=> returnData = data);
  console.log(returnData);
  return returnData.sources;
}

export async function fetchNews(source){
  console.log('in fetch', source);
  let returnData;
  await fetch('https://newscraper-pwa.herokuapp.com/news?s='+source).then(r=>r.json()).then(data=> returnData = data);
  console.log(returnData);
  return returnData;
}

export function* loadSources() {
  console.log('in the saga for loading news');
  // yield put({type: 'LOADING'})
  try { 
    sources = yield fetchSources();
    yield put({ type: 'LOAD REMOTE SOURCES', remoteSources: sources})
  }catch(e){
    console.log(e)
  }
}

export function* loadNews(userSources) {  
  console.log('got it', userSources);
  yield put({type: 'LOADING'});
  try{
    // console.log('this far');
    articles = []
    for (var i = userSources.sources.length - 1; i >= 0; i--) {
      articles = articles.concat(yield fetchNews(userSources.sources[i]));
    }
    // console.log('this far 2');
    // console.log(articles);
    yield put({type: 'LOADED', articles});
    yield put({type: 'NOT_LOADING'});
  } catch(e){
    console.log(e);
    yield put({type: 'NOT_LOADING'});
  }

}

export function* watchLoadNews(){
  yield takeEvery('LOAD', loadNews);
  yield takeEvery('LOAD SOURCES', loadSources);
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchLoadNews()
  ]
}

