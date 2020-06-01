import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Login from './Views/Login.js';
import Register from './Views/Register.js';
import Modal from './Views/Modal.js';
import ClientDetail from './Views/ClientDetail.js'
import ClientsList from './Views/ClientsList.js';
import Logout from './Views/Logout.js';
import TestUs from './Views/TestUs.js';


class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
        return(
          <BrowserRouter>
            <Route exact path="/" component={Home} /> 
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/modal" component={Modal} />
            <Route path="/clientslist" component={ClientsList} />
            <Route path="/clientdetail/:value" component={ClientDetail} />
            <Route path="/test/:value" component={TestUs} />
            <Route path="/logout" component={Logout} />
          </BrowserRouter> 
          );
    }
}

export default App;
