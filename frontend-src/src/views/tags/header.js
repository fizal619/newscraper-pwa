import { h } from 'preact';
import { Link } from 'preact-router';

export default function () {
	return (
		<header className="header">
			<h1>NewScraper</h1>
			<nav>
				<Link href="/">Home</Link>
			</nav>
		</header>
	)
}
