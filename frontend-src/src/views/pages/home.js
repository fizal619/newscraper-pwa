import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import Button from '../tags/button';
import CardLink from '../tags/card-link';
import {connect} from 'react-redux'

const mapStateToProps = state =>({
  news: state.news.articles,
  ui: state.ui  
})

const mapDispatchToProps = dispatch =>({
  load: ()=> {
    console.log('map state')
    dispatch({type: 'LOAD'})
  }
})


const Home =  ({ui,news,load}) => {
  // console.log(ui,news)

	if(ui.loading){
    return (
      <div className="page page__home">
        <Card>
          <br/>
          <center><h3>This takes a bit, hold onto your socks ( ͡° ͜ʖ ͡°)</h3></center>
          <img className="loader" src="/img/loader.gif" alt="loading" />
        </Card>
      </div>
      )
  }else{
    return (
  		<div className="page page__home">
  			<Card>
  				<h2>Latest News</h2>
          <br />
          {news.map((article,index)=>{
            return(
              <CardLink href={ `/article/${index}`}>
                <strong>{article.title}</strong>
              </CardLink>
              )
          })}
          <br />
  				<Button callback={load} name="Refresh" />
          <br />
  			</Card>
  		</div>
  	)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)