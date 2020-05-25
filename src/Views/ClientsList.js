import React, { Component } from 'react';
import Modal from './Modal.js';
import Header from './Header.js';
import './../CSS/Style-main.css';

class ClientsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            share_url: "",
            custom_mss: ""
        }
    }

    //Send Message
    sendMessage = ()=>{
    
    const cust_list_api_url = "";
    const original_url = ""; //own url so customer can rate
    const from_share_url = ""; //if own entered an url
    let jsm = "";

    //Get all values of all checkboxes checked
    let all_checkboxes = document.getElementsByName("cust_checked");
    let chck_checked = []; //array to hold values of all the checked ones
    for(let chk of all_checkboxes){
        if(chk.checked){
            //load value in an array
            chck_checked.push(chk.value);
        }
    } 

        //post message
        function postMss(js, ch){
            console.log(js);
            console.log(JSON.stringify(ch));
        }

        //Check inputs to decide what to send
        if(this.state.share_url === "" && this.state.custom_mss === ""){
            this.state.share_url = "www.myBu.com";
            this.state.custom_mss = "We appreciate your business with us. please click here to rate us";
            jsm = JSON.stringify(this.state)
        }else if(this.state.share_url === "" && this.state.custom_mss !== ""){
            this.state.share_url = "www.myBu.com";
            jsm = JSON.stringify(this.state)
        }else if(this.state.share_url !== "" && this.state.custom_mss === ""){
            this.state.custom_mss = "We appreciate your business with us. please click here to rate us";   
            jsm = JSON.stringify(this.state)
        }else{
            jsm = JSON.stringify(this.state)
        }

        postMss(jsm, chck_checked);
    }

    

    mss_val_changed = (e)=> {
       this.setState({[e.target.name]:e.target.value});
    }
    
    render(){
        
        const {share_url, custom_mss} = this.state;
        return(
            <div className="home-container">
              <Modal />
              <Header />
              <input type="text" name="share_url" className="input-form" onChange={ this.mss_val_changed } value={ share_url } placeholder="share url" />
              <textarea name="custom_mss" className="" onChange={ this.mss_val_changed } value={ custom_mss} placeholder="your message"/>

              <ul className="ul-cust-fn">
                  <li className="li-cust-fn-ln">jean lui</li>
                  <li className="li-cust-send-mss">
                      <input type="checkbox" className="cust_checkbox" name="cust_checked" value="cust_id1"></input>
                  </li>
              </ul>
              <ul className="ul-cust-fn">
                  <li className="li-cust-fn-ln">Moreyna Mckeene makarel</li>
                  <li className="li-cust-send-mss">
                      <input type="checkbox" className="cust_checkbox" name="cust_checked" value="cust_id2"></input>
                  </li>
              </ul>
              <button className="btn-login" onClick={this.sendMessage}>Send Message</button>
            </div>
        );
    }
}

export default ClientsList;