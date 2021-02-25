import React from 'react';

class CClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date : new Date().toLocaleString()
		};
		this.timer = 0;
	}
	componentDidMount() {
		this.timer =  setInterval( () => this.tick(),1000 );
	}
	componentWillUnmount() {
		clearInterval( this.timer );
	}
	tick() {
		this.setState( { date : new Date().toLocaleString() } );
	}
	render() {
		return (
			<p>{this.state.date}</p>
		);
	}
}

export default CClock;