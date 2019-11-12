import React, { Component } from 'react';

import '../styles/css/splash.css';

export default class App extends Component {
	render() {
		return (
			<div className="sp-splash">
				<video className="sp-mask-video" id="video" autoPlay="autoplay" muted="muted" preload="auto" loop="loop">
    				<source
    					src="http://www.elementten.com/media/sp-video-demo.mp4"
    					type="video/mp4"
					/>
    			</video>
			</div>
		);
	}
}
