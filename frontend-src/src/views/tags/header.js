import { h } from 'preact';
import { Link } from 'preact-router';

export default function () {
	return (
		<header className="header">
			<h1>NewScraper 2.0</h1>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/settings">Settings</Link>
			</nav>
		</header>
	)
}
