import React, { Component } from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import '../CSS/Style-main.css';


class TestUs extends Component {
    constructor(props){
           super(props)
           this.state = {
               
           }
    }

   
    render(){
    return(
        <div className="home-container">
          <Header />
              <div>{ this.props.match.params.value }</div>
              <button className="btn-login" type="button" onClick={this.sendMessage}>Send Message</button>
              <Link to="/">
                <button className="btn-login btn-logout" type="button">Log out</button>
              </Link>
         </div>
        
    );
  }
}

export default TestUs;