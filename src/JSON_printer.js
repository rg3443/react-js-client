import React from 'react';

class JSON_printer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            jsonStr : []
        };
    }
    render() {
        return this.state.jsonStr.map((item,index) => <div key={index}>{item}</div>);
    }
}

export default JSON_printer;