require('./style.less')
require('./budmo.less')

import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'
import Header from './components/Header.jsx'
import ArticleList from './components/ArticleList.jsx'
// import VideoPlayer from './components/VideoPlayer.jsx'
import FeaturePresentation from './components/FeaturePresentation.jsx'
import SmallHeader from './components/SmallHeader.jsx'
// import ArticleList from './components/ArticleList.jsx'


class HomePage extends React.Component {
	render(){
		let videos = [
			{
				imageUrl: require('./poster.png'),
				title: "Local Late Night SF: Stormocalypse & SantaCon",
				blurb: "Local Late Night satirical news, tailored to a specific region. ",
				medium: "Video",
				author: "Local Late Night"
			},
			{
				imageUrl: require('./homeless_poster.jpeg'),
				title: "Police and the Homeless in the Bay Area",
				blurb: "Retired Police Commander Richard Corriea reflects on his interactions with the homeless throughout his 35 years with the SFPD",
				medium: "Video",
				author: "Stanford Journalism"
			},
			{
				imageUrl: require('./together_poster.jpeg'),
				title: "Bay Area Muslims and Non-Muslims Band Together",
				blurb: "Alongside the threats and attacks, there has also been an outpouring of support from Bay Area residents that has heartened the local Muslim community. ",
				medium: "Video",
				author: "Peninsula Press"
			}
		]

		let articles = [
			{
				title: "Heavy Rain Spurs Power Outages, Car Crashes, BART Delays",
				blurb: "Rain lashed the Bay Area on Saturday, leaving more than 40,000 people in the dark.",
				medium: "Article",
				author: "NBC Bay Area"
			},
			{
				title: "Run for Cover: SantaCon Returns to San Francisco",
				blurb: "Santa Con, the annual event in which adults live out the broken dreams of their childhood by dressing up like Santa Claus, drinking...",
				medium: "Article",
				author: "Eater SF"
			},
			{
				title: "Major SF roadway reopens near Moscone Center ",
				blurb: "A critical San Francisco intersection near Moscone center is expected to be closed until at least Friday afternoon...",
				medium: "Article",
				author: "KTVU"
			}
		]

		return (
			<div>
				<Header location="San Francisco" locationIconUrl={require('./ggb.png')} />
				<FeaturePresentation articles={articles} />
				<SmallHeader>VIDEOS</SmallHeader>
				<ArticleList staticHeight={true} articles={videos} />
				<SmallHeader>ARTICLES</SmallHeader>
				<ArticleList staticHeight={false} articles={articles} />
			</div>
		)
	}
}

class VideoPage extends React.Component {
	render(){
		let videos = [
			{
				imageUrl: require('./poster.png'),
				title: "Local Late Night SF: Stormocalypse & SantaCon",
				blurb: "Local Late Night satirical news, tailored to a specific region. ",
				medium: "Video",
				author: "Local Late Night"
			},
			{
				imageUrl: require('./homeless_poster.jpeg'),
				title: "Police and the Homeless in the Bay Area",
				blurb: "Retired Police Commander Richard Corriea reflects on his interactions with the homeless throughout his 35 years with the SFPD",
				medium: "Video",
				author: "Stanford Journalism"
			},
			{
				imageUrl: require('./together_poster.jpeg'),
				title: "Bay Area Muslims and Non-Muslims Band Together",
				blurb: "Alongside the threats and attacks, there has also been an outpouring of support from Bay Area residents that has heartened the local Muslim community. ",
				medium: "Video",
				author: "Peninsula Press"
			}
		]

		let articles = [
			{
				title: "Heavy Rain Spurs Power Outages, Car Crashes, BART Delays",
				blurb: "Rain lashed the Bay Area on Saturday, leaving more than 40,000 people in the dark.",
				medium: "Article",
				author: "NBC Bay Area"
			},
			{
				title: "Run for Cover: SantaCon Returns to San Francisco",
				blurb: "Santa Con, the annual event in which adults live out the broken dreams of their childhood by dressing up like Santa Claus, drinking...",
				medium: "Article",
				author: "Eater SF"
			},
			{
				title: "Major SF roadway reopens near Moscone Center ",
				blurb: "A critical San Francisco intersection near Moscone center is expected to be closed until at least Friday afternoon...",
				medium: "Article",
				author: "KTVU"
			}
		]

		let bottomArticles = [
			{
				title: 'Oakland, Alameda announce plan to keep Raiders',
				blurb: 'After months of secret meetings, Oakland and Alameda County officials late today announced a plan to build a new $1.3 billion stadium...',
				medium: 'Article',
				author: 'KTVU'
			}
		]
		return (
			<div>
				<Header location="San Francisco" locationIconUrl={require('./ggb.png')} />
				<FeaturePresentation articles={articles} />
				<SmallHeader>VIDEOS</SmallHeader>
				<ArticleList staticHeight={true} articles={videos} />
				<SmallHeader>ARTICLES</SmallHeader>
				<ArticleList staticHeight={false} articles={articles} />
			</div>
		)
	}
}

ReactDOM.render((
	 <VideoPage />
), document.getElementById('react-content'));

function onYouTubeIframeAPIReady(){
	alert('hi')
}