import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class ServerConnector { 
	constructor() {
		this.state = {
			responseStr : ""
		};
	}
	setData(data) {
		console.log(data);
		this.setState((data) => { return {responseStr : data} });
	}
	getData() {
		console.log(this.state.responseStr);
		return this.state.responseStr;
	}

	connect() {
		console.log("sending request...");
		axios
			.get('https://192.168.16.163/MsgList.json')
			.then(
				response => (
					this.setData(response)
				)
			);
	}
	
}

export default ServerConnector;
