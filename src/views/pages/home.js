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
  },
  read: id=> dispatch({type: 'READ', id: id}),
  saveScroll: ()=> dispatch({type: 'SAVESCROLL', scroll: window.scrollY})
})


const Home =  ({ui,news, sources, load, saveScroll, read}) => {

  setTimeout(()=>window.scrollTo(0,ui.scroll),75)

  const imgError = e =>{
    e.target.style.display = "none"
  }
	if(ui.loading){
    return (
      <div className="page page__home">
        <div className="loader-container">
          <br/>
          <center><h2>This takes a bit, hold onto your socks <br/>( ͡° ͜ʖ ͡°)</h2></center>
          <img className="loader" src="/img/loader.gif" alt="loading" />
        </div>
      </div>
      )
  }else{
    return (
  		<div className="page page__home">
        {news.length == 0 ?
          <div>
            <h2>Hey! Welcome to my app! <br/></h2>
            <p> <b>Newscraper</b> is a fairly simple app for reading news from some popular news sources offline.</p>
            <p>You should add it to your homescreen for the best experience!</p>
            <p><b>Hit the gear on the upper right to pick your favorite sources then come back here and hit refresh.</b></p>
          </div>
          :
          <h2>Latest News <br/></h2>
        }
        {news.map((article,index)=>{

          //only return lengthy things, helps filter out weird stuff from hacker news
          // if (article.content.length < 500) return null

          return(
            <CardLink  href={ `/article/${index}`}>
              <div onClick={()=>{read(index);saveScroll()}} className="content">
                <p class="url small">{article.url.split("/")[2]}</p>
                <img
                  class="logo"
                  onError={imgError}
                  src={"//logo.clearbit.com/"+article.url.split("/")[2]}
                />
                <h3>{article.title}</h3>
                {article.urlToImage ?
                  <img
                  onError={e=>e.target.src = "/img/na.jpg"}
                  src={"https://api.rethumb.com/v1/square/300/"+article.urlToImage} />
                :
                  <img src="/img/na.jpg" />
                }
                <p>{article.description}</p>
                <p className="read">{article['read'] ? '✅' : ''}</p>
                <p className="small">{new Date(article.publishedAt).toDateString()}</p>
              </div>

            </CardLink>
            )
          })}
          <br />
          <div onClick={()=>load(sources)} class="refresh-background">
            <i class="refresh material-icons nav-icon md-36">refresh</i>
          </div>
          <br />
  		</div>
  	)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
