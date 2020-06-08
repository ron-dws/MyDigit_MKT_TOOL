import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedLogin = ({auth, component:Component, ...rest}) => {
    return(
      <Route 
        {...rest}
        render = {() => auth? (<Redirect to="/vdashboard" />):(<Component />)} 
      />
    )
}

export default ProtectedLogin;