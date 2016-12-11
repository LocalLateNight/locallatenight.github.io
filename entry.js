require('./style.less')
require('./budmo.less')

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header.jsx'
import FeaturePresentation from './components/FeaturePresentation.jsx'
import SmallHeader from './components/SmallHeader.jsx'
// import ArticleList from './components/ArticleList.jsx'

class Page extends React.Component {
	render(){
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
				author: "Robert Rotten"
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
				<SmallHeader>Other Relevant Topics:</SmallHeader>
			</div>
		)
	}
}

ReactDOM.render(<Page />, document.getElementById('react-content'));

function onYouTubeIframeAPIReady(){
	alert('hi')
}