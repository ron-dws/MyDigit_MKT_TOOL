import React from 'react';
import Cookies from 'js-cookie';
import Vauthenticate from './Vauthenticate';

const Vdashboard = ()=>{
   const auth_dashboard = React.useContext(Vauthenticate);
   const onlogout = () =>{
       //remove login cookie
       auth_dashboard.setAuthi(false);
       Cookies.remove('user');
   }
    return(
        <div>
          <h1>Dashboard</h1>
          <button onClick={onlogout}>logout</button>
        </div>
    )
}

export default Vdashboard;
