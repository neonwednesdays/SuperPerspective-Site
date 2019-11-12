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
				{/* credits */}
				<div className='sp-app--info-container'>
					<div style={{fontSize: 21}}>The Dashing Crate</div>
					<div style={{fontSize: 14}}>presents</div>
				</div>

				{/* link */}
				<div className='sp-app--get-container'>
					<h2 style={{fontSize: 25}}>FREE on Steam!</h2>
					<GetButton />
				</div>

				{/* animatic */}
				<Splash />

			</div>
		);
	}
}

export default App;
