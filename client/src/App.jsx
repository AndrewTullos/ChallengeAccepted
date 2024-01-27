import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";

function App() {
	return (
		<Router>
			<div>
				{/* Navigation and other global components can go here */}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={AboutPage} />
					{/* Fallback route for unmatched paths */}
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
