import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
    return(
        <Route 
          {...rest}
          render = { ()=>auth? (<Component/>):(<Redirect to="/vlogin" />) }
        />
    )
}

export default ProtectedRoute;