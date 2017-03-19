import {
  take,
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

//BAD SCOPING IDK. TODO OPTIMIZE
let articles = []

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export async function fetchNews(source){
  console.log('in fetch');
  let returnData;
  await fetch('https://newscraper-pwa.herokuapp.com/news?s='+source).then(r=>r.json()).then(data=> returnData = data);
  console.log(returnData);
  return returnData;
}

export function* loadNews() {  
  console.log('got it');
  yield put({type: 'LOADING'});
  try{
    // const data = yield call(fetch,'http://localhost:5000/news?s=techcrunch')
    // const articles = yield data.json()
    // console.log(articles)
    console.log('this far');
    articles = []
    articles = articles.concat(yield fetchNews('hacker-news'));
    articles = articles.concat(yield fetchNews('ars-technica'));
    articles = articles.concat(yield fetchNews('techcrunch'));
    articles = articles.concat(yield fetchNews('engadget'));
    console.log('this far 2');
    console.log(articles);
    yield put({type: 'LOADED', articles});
    yield put({type: 'NOT_LOADING'});
  } catch(e){
    console.log(e);
    yield put({type: 'NOT_LOADING'});
  }

}

export function* watchLoadNews(){
  yield takeEvery('LOAD', loadNews);
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchLoadNews()
  ]
}

