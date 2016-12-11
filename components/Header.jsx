import React from 'react';

export default class Header extends React.Component {
	render() {
		let image = this.props.locationIconUrl ? (<img className="icon" src={this.props.locationIconUrl} />) : null
		// TODO put logo here
	    return (
			<header>
				<h1>
					Local <img src="location_icon.png" /> Late Night
				</h1>
				<h3>
					<span className="location">LIVE FROM {this.props.location.toUpperCase()}</span>
					&nbsp;{image}
				</h3>
			</header>
		)
  }
}