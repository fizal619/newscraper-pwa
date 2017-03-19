import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';

import {connect} from 'react-redux'

const mapStateToProps = state =>({
	article: state.news.articles
})

const Article = ({id, article}) => { // <---- (props)
	// console.log(article)
	//TODO: redirect to home if  
	return (
		<div className="page page__article">
			<Card>
				<h1>{article[id].title}</h1>
				<div dangerouslySetInnerHTML={{__html: article[id].content }}></div>
				
			</Card>
		</div>
	);
}

export default connect(mapStateToProps)(Article)