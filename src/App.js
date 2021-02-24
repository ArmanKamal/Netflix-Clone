import React from "react";

import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home, Browse, Login, Register} from "./pages/";

const App = () => {
  return (
    <Router>
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
