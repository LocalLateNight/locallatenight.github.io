import React from 'react';

import ArticlePreview from './ArticlePreview.jsx'

export default class ArticleList extends React.Component {
	render() {
		let inline = this.props.orientation === 'horizontal'

		let articlePreviews = this.props.articles.map((article, i) => {
			return React.createElement(ArticlePreview, Object.assign({
				key: i,
				inline
			}, article))
		})

		return (
			<div className="article-preview-list">
				{articlePreviews}
			</div>
		)
	}
}