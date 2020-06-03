import React from 'react';
import Vauthenticate from './Vauthenticate';
import Header from '../Views/Header.js';
import Cookies from 'js-cookie';

const Vlogin = ()=>{
    const auth_log = React.useContext(Vauthenticate);
    const onlogin = () => { 
        auth_log.setAuthi(true);
        Cookies.set('user','islogin');
    }
    return(
        <div>
          <Header />
          <h1>Log In page</h1>
          <button onClick={onlogin}>login</button>
        </div>
    )
}

export default Vlogin;