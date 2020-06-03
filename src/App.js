import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import Login from './Views/Login.js';
import Register from './Views/Register.js';
import Modal from './Views/Modal.js';
import ClientDetail from './Views/ClientDetail.js'
import ClientsList from './Views/ClientsList.js';
import Logout from './Views/Logout.js';
import TestUs from './Views/TestUs.js';
import ErrorPage from './Views/ErrorPage.js';
import Vlogin from './ViewsAuthenticate/Vlogin';
import ProtectedRoute from './ViewsAuthenticate/ProtectedRoute';
import ProtectedLogin from './ViewsAuthenticate/ProtectedLogin';
import Vdashboard from './ViewsAuthenticate/Vdashboard';
import Vauthenticate from './ViewsAuthenticate/Vauthenticate';
import Cookies from 'js-cookie';



const App = () => {
  
    const [authi, setAuthi] = React.useState(false);

    //Read cookie to check user login
    const readCookie = () => {
       const user = Cookies.get('user');
       if(user){
         setAuthi(true);
       }
    }

    React.useEffect(() => {
       readCookie();
    },[])

        return(
           <Vauthenticate.Provider value={{authi, setAuthi}}>
              <HashRouter>
                <Switch>
                  <Route exact path="/" component={Home} /> 
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/modal" component={Modal} />
                  <Route path="/clientslist" component={ClientsList} />
                  <Route path="/clientdetail/:value" component={ClientDetail} />
                  {/* <Route path="/test/:value" component={TestUs} /> */}
                  <Route path="/test" component={TestUs} />
                  <Route path="/logout" component={Logout} />
                  
                  <ProtectedLogin path="/vlogin" auth={authi} component={Vlogin} />
                  <ProtectedRoute path="/vdashboard" auth={authi} component={Vdashboard} />
                  <Route path="*" component={ErrorPage} />
                </Switch> 
            </HashRouter> 
           </Vauthenticate.Provider>
          );
    
}

export default App;

