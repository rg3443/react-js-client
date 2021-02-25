import React from 'react';
import logo from './logo.svg';
import CMsgBox from './CMsgBox';
import CMsgTextArea from './CMsgTextArea';
import ServerConnector from './ServerConnector.js'
import CMsg from './CMsg';
import './CConsole.css';
import AJAX_requester from './AJAX_requester.js';
import CClock from './CClock.js';
import CButton from './CButton.js';

function _debug(str,isdeb) {
	if(isdeb) {
		console.log(str);
	}
}

class CConsole extends React.Component {
	constructor(props) {
		super(props);
		this.timer = 0; 
		this.state = {
			txtArea : '',
			clearitpls : false,
			msgList : null,
			onlyReceived : false
		};
		this.isDebug = true;
		this.requester = new AJAX_requester;
		this.requester.testRequest();
		_debug("console init",this.isDebug);
		this.UpdateMsgBox = this.UpdateMsgBox.bind(this);
	}
	
	//tick
	componentDidMount() {
		this.requester.SendRequest("GET","http://192.168.16.163:8080/msg-list");
		this.setState({
			msgList : this.requester.GetArray()
		});
		this.timer = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	tick() {
		this.setState({});
	}
	
	//update data methods
	UpdateMsgBox() {
		
		if(this.requester.GetJson() != null)
		this.requester.SendRequest("GET","http://192.168.16.163:8080/msg-list")
		console.log(this.requester.GetJson());
		console.log(this.requester.GetArray());
		var jsona = this.requester.GetJson();
		console.log(jsona);
		var array = Array.from(jsona["jsonFile"]["list"]);
		console.log(array);
		this.setState({
			msgList : Array.from(jsona["jsonFile"]["list"])
		});
	}
 
	
	render() {
		if(this.state.msgList != null)
		return (
			<div>
				<h1>Сообщения</h1>
				<CButton
					text="Обновить"
					action={this.UpdateMsgBox.bind(this,this.state.msgList)}
				/>
				<CClock />
				<CMsgBox  
					msgList={this.state.msgList} 
				/>
			</div>
		);
		else return (
			<div>
				<h1>
					Page is loading...
				</h1>
				<CButton
					text="Обновить"
					action={this.UpdateMsgBox.bind(this,this.state.msgList)}
				/>
			</div>
		);
	}
}
export default CConsole;
