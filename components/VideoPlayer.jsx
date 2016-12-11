import React from 'react';

const UNSUPPORTED_VIDEO_MESSAGE = 'Please update your browser to watch this video.'

export default class VideoPlayer extends React.Component {
	render() {
		if (this.props.type === "youtube") {
			return this.renderYoutube()
		}

		if (this.props.type === "html5") {
			return this.renderHTML5Player()
		}

		return null
	}

	renderYoutube() {
		// if (!window.YOUTUBE_JS_API_REQUESTED) {
		// 	let tag = document.createElement('script');
		// 	tag.src = "https://www.youtube.com/iframe_api";
		// 	let firstScriptTag = document.getElementsByTagName('script')[0];
		// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		// 	window.YOUTUBE_JS_API_REQUESTED = true
		// }
		let query = 'showinfo=0&modestbranding=1&enablejsapi=1'
		let frameSrc = `https://www.youtube.com/embed/${this.props.youtubeId}/?${query}`

		return (
			<iframe className="player" src={frameSrc} frameBorder="0"></iframe>
		)
	}

	renderHTML5Player() {
		let videoSources = arrayWrap(this.props.src).map((src, i) => {
			return <source key={i} src={src.url} type={src.mime} />
		})
		return (
			<video className="player" controls>
				{videoSources}
				{UNSUPPORTED_VIDEO_MESSAGE}
			</video>
		)
	}
}

function arrayWrap(x) {
	if (Array.isArray(x)) {
		return x
	} else {
		return Array.of(x)
	}
}