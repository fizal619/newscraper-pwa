import { h } from 'preact';
import { Link } from 'preact-router';


const extraHeader = () => {
  if(navigator.userAgent.includes('iPhone')||navigator.userAgent.includes('iPad')){
    return (
      {
        height: '72px',
        paddingTop: '12px'
      }
    )
  }else{
    return {}
  }
}

export default function () {

	return (
		<header style={extraHeader()} className="header">
			<h1>NewScraper 2.0</h1>
			<nav>
				<Link href="/"><i class="material-icons nav-icon md-36">home</i></Link>
				<Link href="/settings"><i class="material-icons nav-icon md-36">settings</i></Link>
			</nav>
		</header>
	)
}
