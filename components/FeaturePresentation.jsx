import React from 'react';

import ArticleList from './ArticleList.jsx'
import VideoPlayer from './VideoPlayer.jsx'
// <VideoPlayer type="youtube" youtubeId="-rSDUsMwakI" />
				// <VideoPlayer type="html5" src={videoSrc} />


export default class FeaturePresentation extends React.Component {
	render() {
		// let videoSrc = {
		// 	url: 'mov_bbb.mp4',
		// 	mime: 'video/mp4',
		//  poster: 'poster.jpg'
		// }
		return (
			<div className="feature-presentation">
				<ArticleList articles={this.props.articles} />
				<VideoPlayer type="youtube" youtubeId="JdrdkwnJihQ" />
			</div>
		)
	}
}