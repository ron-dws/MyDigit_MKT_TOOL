import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// I took out ...rest => Because Edge & IE browsers does not implement it yet
const ProtectedRoute = ({auth, component:Component}) => {
    return(
        <Route 
          render = { ()=>auth? (<Component/>):(<Redirect to="/vlogin" />) }
        />
    )
} 

export default ProtectedRoute;