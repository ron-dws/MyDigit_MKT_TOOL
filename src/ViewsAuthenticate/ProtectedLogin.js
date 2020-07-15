import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// I took out ...rest => Because Edge & IE browsers does not implement it yet
const ProtectedLogin = ({auth, component:Component}) => {
    return(
      <Route 
        render = {() => auth? (<Redirect to="/vdashboard" />):(<Component />)} 
      />
    )
}

export default ProtectedLogin;