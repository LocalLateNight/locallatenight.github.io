import React from 'react';

import ArticleList from './ArticleList.jsx'
import VideoPlayer from './VideoPlayer.jsx'
// <VideoPlayer type="youtube" youtubeId="-rSDUsMwakI" />
				// <VideoPlayer type="html5" src={videoSrc} />


export default class FeaturePresentation extends React.Component {
	render() {
		let videoSrc = {
			url: 'local_sf.mp4',
			mime: 'video/mp4'
		}
		return (
			<div className="feature-presentation">
				<ArticleList articles={this.props.articles} />
				<VideoPlayer type="html5" src={videoSrc} poster={require('../poster.png')} />
			</div>
		)
	}
}