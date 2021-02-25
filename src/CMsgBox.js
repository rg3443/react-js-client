import React from 'react';
import logo from './logo.svg';

//todo: отсылать AJAXrequester сюда, чтобы тут же и рисовал сообщения  из json файла 
class CMsgBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msgList : this.props.msgList,
			isLoaded : false
		};
	}
	componentDidUpdate() {
		this.setState({
			msgList : this.props.msgList
		});
	}
	render() {
		//console.log(this.state.msgList);
		return (
			this.state.msgList.map(
				(msg) => (
					<li key={msg.id}>
						ID сообщения :{msg.id}| Дата : {msg.date}| Содержание : {msg.message}
					</li>
				)
			)	
		);
	}
}
export default CMsgBox;