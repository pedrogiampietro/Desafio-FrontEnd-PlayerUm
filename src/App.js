import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/sign-in">Sign-in</Link>
						</li>
						<li>
							<Link to="/sign-up">Sign-up</Link>
						</li>
						<li>
							<Link to="/manage/places/create">Create Place</Link>
						</li>
						<li>
							<Link to="/manage/places/edit">Edit Place</Link>
						</li>
						<li>
							<Link to="/manage/places">Places</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/">
						<h1>Home</h1>
					</Route>
					<Route path="/sign-in">
						<h1>Sign-in</h1>
					</Route>
					<Route path="/sign-up">
						<h1>Sign-up</h1>
					</Route>
				</Switch>
				<Route exact path="/manage/places/create">
					<h1>Create Place</h1>
				</Route>
				<Route exact path="/manage/places/edit">
					<h1>Edit Place</h1>
				</Route>
				<Route exact path="/manage/places">
					<h1>Places</h1>
				</Route>
			</div>
		</BrowserRouter>
	)
}

export default App
