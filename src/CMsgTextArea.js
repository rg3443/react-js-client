import React from 'react';
import logo from './logo.svg';
import './CMsgTextArea.css';

class CMsgTextArea extends React.Component {
	constructor(props) {
		super(props);
		this.HandleChange = this.HandleChange.bind( this );
	}
	
	HandleChange(e) {
		this.props.HandleChange(e.target.value);
	}
	
	render() {
		return (
		<form>
			<input
				type="text"
				placeholder="Введите сообщение"
				value={this.props.txtArea}
				onChange={this.HandleChange}
				onSubmit={this.props.Clear}
			/>
			<p>
				<input
					type="checkbox"
					checked={this.props.onlyReceived}
					onChange={this.HandleChange}
				/>
				{' '}
				Только входящие
			</p>
		
      </form>
		);
	}
}
export default CMsgTextArea;