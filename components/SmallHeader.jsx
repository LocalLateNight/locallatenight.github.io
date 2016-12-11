import React from 'react';

export default class SmallHeader extends React.Component {
	render() {
		return (
			<div className="header-small">
				{this.props.children}
			</div>
		)
	}
}