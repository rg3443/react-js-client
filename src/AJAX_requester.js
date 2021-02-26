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
            isLoading : false,
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
                .then(this.state.isLoading = true)
                .then(
                    json => {
                      this.state.isLoaded = true;
                      this.state.isLoading = false;
                      this.state.message = json;
                    },
                    (error) => {
                      this.state.isLoaded = false;
                      this.state.isLoading = false;
                      this.state.error = error;
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
        console.log("file is loaded: ok to get array");
        if(this.state.message["jsonFile"]["list"] != null) {
          console.log("array is not null: ok to get obj");
          var res = Array.from(this.state.message["jsonFile"]["list"]);
          return res;
        } else {
          console.log("array is null: bad to get obj");
        } 
      } else {
        console.log("file is not loaded: bad to get array");
      }
    }
}

export default AJAX_requester;