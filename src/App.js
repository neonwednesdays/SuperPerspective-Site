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
				{/* header */}
				<div className='sp-app--header'>
					<div className=''
					style={{fontSize: 21, fontWeight: 'bold'}}>The Dashing Crate</div>
					<div style={{fontSize: 14}}>presents</div>
				</div>

				{/* animatic */}
				<Splash />

				{/* rest of the page */}
				<div className='sp-app--info'>
					<div className='sp-app--get-container'>
						<h2 style={{fontSize: 25}}>FREE on Steam!</h2>
						<GetButton />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
