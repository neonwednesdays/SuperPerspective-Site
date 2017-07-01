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
				<svg
					className="sp-mask-logo"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1920 1080"
					width={ width }
					height={ height }
					preserveAspectRatio="xMidYMid slice"
				>
					<defs>
						<mask id="mask" x="0" y="0" width={ width } height={ height } >
						  <rect className="sp-mask-logo--bg" x="0" y="0" width="100%" height="100%"/>
						  <text className="sp-mask-logo--text" x="50%" y="400">Super</text>
						  <text className="sp-mask-logo--text" x="50%" y="650">Perspective</text>
						</mask>
					</defs>
					<rect className="sp-mask-logo--container" x="0" y="0" width={ width } height={ height }/>
				</svg>
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