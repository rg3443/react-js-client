import React from 'react';
//import axios from 'axios'; // "fetch" alternative 

function parseJson(data) {
    data = data.toString().replace('\n', '', 'g');
  
    var
      start = data.indexOf('{'),
      open = 0,
      i = start,
      len = data.length,
      result = [];
  
    for (; i < len; i++) {
      if (data[i] == '{') {
        open++;
      } else if (data[i] == '}') {
        open--;
        if (open === 0) {
          result.push(JSON.parse(data.substring(start, i + 1)));
          start = i + 1;
        }
      }
    }
  
    return result;
  }

class AJAX_requester {
    constructor(props) {
        //super(props);
        this.state = {
            error : null,
            isLoaded : false,
            message : [] 
        };
    }
    //componentDidMount() {
        //this.SendRequest(this.props.type,this.props.request);
    //}
    testRequest() {
        console.log("test loading json file...");
        fetch('http://192.168.16.163:8080/msg-list')
            .then(response => response.json())
            .then(json => {this.state.message = json; console.log(json);});
    }
    SendRequest(type,request) {
        console.log("loading json file...");
        if(type == "GET") {
            fetch(request)
                .then(res => res.json())
                .then(this.message = null)
                .then(
                    json => {
                      this.isLoaded = true;
                      this.message = json;
                      /*
                        this.setState({
                            isLoaded : true,
                            isLoading : false,
                            message : json
                        });
                      */
                    },
                    (error) => {
                      this.isLoaded = false;
                      this.error = error;
                    }
                )
                .then(
                  console.log("file was loaded")
                )
                .then(
                  console.log(this.state.message)
                );
        } else if(type == "POST") {

        } 
    }
    /*
    DrawMsgList(message) {
        let finalList = [];
        finalList.concat(message.list);
        console.log(this.state.message);
        var s = Array.from(this.state.message["jsonFile"]["list"]);
        return (
            s.map(
                (msg) => (
                    <li key={msg.id}>
                        ID сообщения :{msg.id}| Содержание : {msg.message}
                    </li>
                )
            )
            
        );
    }
    */
    GetJson() {
      return this.state.message;
    }
    IsLoading() { 
      return this.state.isLoading; 
    }
    GetArray() {
      if(this.state.isLoaded) {
        console.log("getting array");
        console.log(this.state.message);
        if(this.state.message["jsonFile"]["list"] != null)
       // var res = this.state.message["jsonFile"]["list"];
        var res = Array.from(this.state.message["jsonFile"]["list"]);
        console.log(this.state.message);
        console.log("res is: " + res);
        return res;
      }
    }
}

export default AJAX_requester;