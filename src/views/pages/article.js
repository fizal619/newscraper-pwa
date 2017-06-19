import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';

import {connect} from 'react-redux'

const mapStateToProps = state =>({
	article: state.news.articles
})

const Article = ({id, article, saveScroll, read}) => { // <---- (props)
	// console.log(article)
	// TODO: make this work with router
	if(!article[id]) location='/'


	//move the view up to deal with that bug
	setTimeout(()=>window.scrollTo(0,0),75)

	return (
		<div className="page page__article">
				<h1>{article[id].title}</h1>
				<div dangerouslySetInnerHTML={{__html: article[id].content }}></div>
		</div>
	);
}

export default connect(mapStateToProps)(Article)
