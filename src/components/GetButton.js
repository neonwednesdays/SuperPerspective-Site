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
				Get it On Steam
			</button>
		);
	}

	handleOnClick = () => {
		// coming soon
	}
}