import React from 'react';
import logo from './logo.svg';
import './App.css';
import CConsole from './CConsole.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<CConsole />
			</div>
		);
		
	}
}

export default App;
