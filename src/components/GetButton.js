import React, { Component } from 'react';

import '../styles/css/button.css';
import '../styles/css/get-button.css';

export default class GetButton extends Component {
	render() {
		return (
			<a
				className="sp-button sp-get-button"
				href="https://store.steampowered.com/app/629420/Super_Perspective/"
			>
				<span>Free on Steam!</span>
				<i
					className="fa fa-steam-square"
					aria-hidden="true"
				/>
			</a>
		);
	}
}
