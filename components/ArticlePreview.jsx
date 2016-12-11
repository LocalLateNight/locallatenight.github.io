import React from 'react';

export default class ArticlePreview extends React.Component {
	render() {
		let image = this.props.imageUrl ? (<img src={this.props.imageUrl} />) : null
		return (
			<div className="article-preview">
				<a className="invisible" href={this.props.href}>
					{image}
					<div className="title">{this.props.title}</div>
					<hr />
					<div className="blurb">{this.props.blurb}</div>
					<div className="source">{this.props.medium} by {this.props.author}</div>
				</a>
			</div>
		)
	}
}