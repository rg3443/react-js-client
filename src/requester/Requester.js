import React from 'react';
import axios from 'axios';

class SimpleRequester extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result : "NULL"
		};
	}
	componentDidMount() {
		axios.get('http://192.168.16.163/foo')
			.then((response) => {
			this.setState({
				data: response // maninpulate response here
			})	
		});
	}
	render() {
		const { data } = this.state;
		return ( <p>{data}</p> );
		
	}
};

export default SimpleRequester;