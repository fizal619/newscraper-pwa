import {
  take,
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}


export function* loadNews() {
  // dispatch({type:'LOADING'})
  console.log('got it')
  yield put({type: 'LOADING'})
  const data = yield call(fetch,'/?s=techcrunch')
  const articles = yield data.json()
  console.log(articles)
  yield put({type: 'LOADED', articles:articles})
  yield put({type: 'NOT_LOADING'})

}

export function* watchLoadNews(){
  yield takeEvery('LOAD', loadNews)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchLoadNews()
  ]
}

