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

	if(ui.loading || news.length === 0){
    return (
      <div className="page page__home">
        <Card>
          <h3>Loading...</h3>
          <Button callback={load} name="Refresh" />
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