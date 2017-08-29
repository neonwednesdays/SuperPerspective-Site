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
			<div className="sp-notice">Coming Soon</div>
			<GetButton />
		</div>
		<Splash />
	</div>
	);
}
}

export default App;
