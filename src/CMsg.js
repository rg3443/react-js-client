
class CMsg {
	constructor() {
		this.type = 'default type';
		this.text = 'default text';
		this.date = new Date();
	}
	
	GetType() { return this.type; }
	GetText() { return this.text; }
	GetDate() { return this.date; }
}
export default CMsg;