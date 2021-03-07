import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home, Browse, Login, Register} from "./pages/";
import { IsUserRedirect} from './helpers/routes';

const App = () => {
  const user = {}
  return (
    <Router>
       <Route exact path={ROUTES.LOGIN}>
         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.LOGIN}>
           <Login />
         </IsUserRedirect>

      </Route>

      <Route exact path={ROUTES.SIGN_UP}>
         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
           <Login />
         </IsUserRedirect>

      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

      <Route exact path={ROUTES.LOGIN}>
        <Login />
      </Route>

      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>

      <Route exact path={ROUTES.SIGN_UP}>
        <Register />
      </Route>
   
    </Router>
  );
};

export default App;
