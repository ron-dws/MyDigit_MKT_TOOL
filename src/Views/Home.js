import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import '../CSS/Style-main.css';


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            regiter_view: false,
            letitre:"East Star Wireless",
        }
    }
    
    render(){
     return(
        <div className="home-container">
           <Header />
           <Link to="/register">
             <button className="btn-register" name="ordre">Resgister</button>
           </Link>
           <Link to="/login">
             <button className="btn-login">Log In</button>
           </Link>        
        </div>
          
         
        );
    }
}

export default Home;