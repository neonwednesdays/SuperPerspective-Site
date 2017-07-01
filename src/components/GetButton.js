import React, { Component } from 'react';

import '../styles/css/button.css';
import '../styles/css/get-button.css';

export default class GetButton extends Component {
	render() {
		return (
			<button
				className="sp-button sp-get-button"
				onClick={ this.handleOnClick }
			>
				<i className="fa fa-steam-square" aria-hidden="true" />
			</button>
		);
	}

	handleOnClick = () => {
		// coming soon
	}
}