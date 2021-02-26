import React from 'react';
import logo from './logo.svg';
import ReactVirtualizedTable from './CVirtualizedTable.js';
function CreateData(id,message,date) {
	return { id,message,date };
  }

//todo: отсылать AJAXrequester сюда, чтобы тут же и рисовал сообщения  из json файла 
class CMsgBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msgList : this.props.msgList,
			isLoaded : false
		};
		this.data = [];
	}
	componentDidUpdate() {
		this.state.msgList = this.props.msgList;
		this.data = [];
		console.log(this.state.msgList[0]);
		for(let i=0;i<this.state.msgList.length;i++) {
			this.data.push(
				CreateData(
					this.state.msgList[i]["id"],
					this.state.msgList[i]["message"],
					this.state.msgList[i]["date"]
				)
			);
		}
	}
	render() {
		//console.log(this.data);
		return (
			<ReactVirtualizedTable data={this.data}/>

		);
	}
}
export default CMsgBox;