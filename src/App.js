import React, { Component } from 'react';
import './styles/css/app.css';

/* pages */
import Splash from './pages/Splash';

/* components */
import GetButton from './components/GetButton';

class App extends Component {
render() {
	return (
	<div className="sp-app">
		<div className="sp-app--content">

			<h2 className="sp-h2">by</h2>
			<p className="sp-content--big-n-bold">The Dashing Crate</p>

			<br/>

			<h2 className="sp-h2">Get it Free on Steam!</h2>
			<GetButton />

		</div>
		<Splash />
	</div>
	);
}
}

export default App;
