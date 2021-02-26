import React from 'react';
import logo from './logo.svg';
import './App.css';
import CConsole from './CConsole.js';
import CAppBar from './AppBar.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//test1
import SocketClient from './socket/SocketClient.js';
import socketMiddleware from './socket/SocketMiddleware.js';
import configureStore from './socket/ConfigureStore.js';
//test2
import subscribeToTimer from './socket/api.js'; 


class App extends React.Component {
	constructor(props) {
		super(props);
		subscribeToTimer((err,timestamp) => this.setState({
			timestamp: timestamp
		}));
	}
	state = {
		timestamp : 'no timestamp yet'
	}
	render() {
		return (
			<div className="App">
				<CConsole />
			</div>
		);
		
	}
}

export default App;
