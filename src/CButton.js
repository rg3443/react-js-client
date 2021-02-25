import React from 'react';

class CButton extends React.Component {
	constructor(props) {
		super(props);
		this.HandleClick = this.HandleClick.bind( this );
		
	}
	HandleClick(e) {
		this.props.action( e.target.value );
	}
	render() {
		return (
			<button onClick={this.HandleClick}>{this.props.text}</button>
		);
	}	
}

export default CButton;