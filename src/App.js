import React, { Component } from 'react';
import './styles/css/app.css';

/* pages */
import Splash from './pages/Splash';

/* components */
import GetButton from './components/GetButton';

function randomPrefix() {
	const prefixList = ['Sir', 'The Dashing', 'Two-Dimensional', 'Three-Dimensional', 'The Amused', 'Crystalline', 'Glowing', 'Boxy', 'The Dapper', 'The Breezy', 'Create-dasher', 'Super'];
	const randomIdx = Math.floor(Math.random() * (prefixList.length - 1));
	return prefixList[randomIdx];
}

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
						<GetButton />
					</div>

					<div className='sp-app--dev-container'>
						<h2 style={{fontSize: 14}}>Developed by</h2>
						<ul className='dev-list'>
							<li className='dev-item'>{`${randomPrefix()} Nick Shooter`}</li>
							<li className='dev-item'>{`${randomPrefix()} Larry Smith`}</li>
							<li className='dev-item'>{`${randomPrefix()} Peter Aquila`}</li>
							<li className='dev-item'>{`${randomPrefix()} Arend Peter Castelein`}</li>
							<li className='dev-item'>{`${randomPrefix()} Daniel Xiao`}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
