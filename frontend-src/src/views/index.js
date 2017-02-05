import { h } from 'preact'
import { Router } from 'preact-router';

import Home from './pages/home';
import Layout from './tags/layout';
import Article from './pages/article';
import Error404 from './pages/errors/404';
import Credit from './pages/credit';
import Blog from './pages/blog';

import {Provider} from 'react-redux'
import {compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {persistStore, autoRehydrate} from 'redux-persist'


import reducers from '../reducers/index'
import rootSaga from '../actions/sagas'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers, 
  compose(
    applyMiddleware(sagaMiddleware),
    autoRehydrate()
    )
  )

sagaMiddleware.run(rootSaga)
persistStore(store, {
  whitelist: ['news']
})


// track pages on route change
const onChange = obj => window.ga && ga('send', 'pageview', obj.url);

export default (
  <Provider store={store}>
	<Layout>
		<Router onChange={ onChange }>
			<Home path="/" />
			<Article path="/article/:id" />
			<Error404 default />
		</Router>
	</Layout>
  </Provider>
);
