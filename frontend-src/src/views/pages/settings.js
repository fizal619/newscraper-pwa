import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';

import {connect} from 'react-redux'

const mapStateToProps = state =>({
	sources: state.news.sources,
	remoteSources: state.news.remoteSources
})

const mapDispatchToProps = dispatch =>({
  addSource: (source)=> {
    dispatch({type: 'ADD SOURCE', source})
  },
  removeSource: (source)=> {
    dispatch({type: 'REMOVE SOURCE', source})
  },
  loadSources: ()=> dispatch({type: 'LOAD SOURCES'})
})


// const sources = fetchSources().sources

// const categories = {}
// sources.map(source=>{
// 	categories[source.category] = ''
// })
// categories = Object.keys(categories)

const Settings = ({addSource, removeSource, loadSources, sources, remoteSources}) => { // <---- (props)	
	
	let checkButton;
	remoteSources.length == 0 ? loadSources() : checkButton = true;
	
	return (
		<div className="page page__settings">
			<div class="logo-container">
				{remoteSources.map(item=>
					sources.indexOf(item.id) >= 0 ? <img onClick={()=>removeSource(item.id)} class="logo glow" src={item.urlsToLogos.small} /> : <img onClick={()=>addSource(item.id)} class="logo" src={item.urlsToLogos.small} />
				)}
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)