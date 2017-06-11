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
let userSources = []

export function* helloSaga() {
  console.log('Hello Sagas!');
}


export async function fetchSources(){
  console.log('in fetch sources');
  let returnData;
  await fetch('https://newsapi.org/v1/sources?language=en').then(r=>r.json()).then(data=> returnData = data);
  console.log(returnData);
  return returnData.sources;
}

export async function fetchNews(source){
  console.log('in fetch');
  let returnData;
  await fetch('https://newscraper-21f8a.firebaseio.com/news/'+source+'.json').then(r=>r.json()).then(data=> returnData = data);
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

export function* loadNews(action) {
  console.log('got it');
  yield put({type: 'LOADING'});
  try{
    // console.log('this far');
    articles = []
    userSources = [].concat(action.sources);
    // console.log(articles);
    while (userSources.length > 0 ){
      articles = articles.concat(yield fetchNews(userSources.pop()))
    }

    yield put({type: 'LOADED', articles});
    yield put({type: 'NOT_LOADING'});
  } catch(e){
    console.log(e);
    yield put({type: 'NOT_LOADING'});
  }

}

export function* watchLoadNews(){
  yield takeLatest('LOAD', loadNews);
  yield takeLatest('LOAD SOURCES', loadSources);
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchLoadNews()
  ]
}
