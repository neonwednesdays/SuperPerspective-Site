import React, { Component } from 'react';

import '../styles/css/splash.css';
import '../styles/css/mask-logo.css';

export default class App extends Component {
	static defaultProps = {
		width: "100%",
		height: "100%",
	};

	render() {
		const { width, height } = this.props;

		return (
			<div className="sp-splash">
				
				<video className="sp-mask-logo--video" id="video" autoPlay="autoplay" muted="muted" preload="auto" loop="loop">
    				<source
    					src="http://www.elementten.com/media/sp-video-demo.mp4"
    					type="video/mp4"
					/>
    			</video>
			</div>
		);
	}
}