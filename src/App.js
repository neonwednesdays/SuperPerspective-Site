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

const DevItem = (props) => {
	const hasLink = props.link !== undefined;

	return (
		<li className='dev-item'>
			{ hasLink &&
				<a className='contact-link' href={props.link}>
					<span style={{marginRight: 5}}>{`${randomPrefix()} ${props.name}`}</span>
					<i className="fa fa-link"/>
				</a>
			}

			{ !hasLink &&
				<span>{`${randomPrefix()} ${props.name}`}</span>
			}
		</li>
	)
}

class App extends Component {
	render() {
		return (
			<div className="sp-app">
				{/* header */}
				<div className='sp-app--header'>
					<div style={{fontSize: 21, fontWeight: 'bold'}}>The Dashing Crate</div>
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
							<DevItem name='Nick Shooter' link='http://nickshooter.weebly.com/'/>
							<DevItem name='Larry Smith'/>
							<DevItem name='Peter Aquila' link='http://www.peteraquila.com'/>
							<DevItem name='Arend Peter Castelein'/>
							<DevItem name='Daniel Xiao' link='http://www.elementten.com'/>
						</ul>
					</div>
				</div>

				{/* footer */}
				<div className='sp-app--footer'>
				</div>
			</div>
		);
	}
}

export default App;
