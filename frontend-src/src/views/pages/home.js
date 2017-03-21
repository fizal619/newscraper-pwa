import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import Button from '../tags/button';
import CardLink from '../tags/card-link';
import {connect} from 'react-redux'

const mapStateToProps = state =>({
  news: state.news.articles,
  sources: state.news.sources,
  ui: state.ui  
})

const mapDispatchToProps = dispatch =>({
  load: (sources)=> {
    console.log('map state')
    dispatch({type: 'LOAD', sources})
  }
})


const Home =  ({ui,news, sources, load}) => {
  // console.log(ui,news)

	if(ui.loading){
    return (
      <div className="page page__home">
        <Card>
          <br/>
          <center><h3>This takes a bit, hold onto your socks <br/>( ͡° ͜ʖ ͡°)</h3></center>
          <img className="loader" src="/img/loader.gif" alt="loading" />
        </Card>
      </div>
      )
  }else{
    return (
  		<div className="page page__home">
        <h2>Latest News</h2><br/>
        {news.map((article,index)=>{

          //only return lengthy things, helps filter out weird stuff from hacker news
          if (article.content.length < 1000) return null
          
          return(
            <CardLink href={ `/article/${index}`}>
              <h3>{article.title}</h3>
              <br />
              {article.urlToImage ?
                <img src={"https://api.rethumb.com/v1/square/200/"+article.urlToImage} />
              :
                <img src="/img/na.jpg" />
              }
              <p>{article.description}</p>
  
            </CardLink>
            )
          })}
          <br />
          <Button callback={()=>load(sources)} name="Refresh" />
          <br />
  		</div>
  	)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)