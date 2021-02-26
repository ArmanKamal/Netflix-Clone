import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import {GlobalStyles} from './global-styles'
import App from './App'
import {firebase} from './lib/firebase.prod'
ReactDOM.render(
  <>
    <GlobalStyles /> 
    <App />
  </>
  ,
  document.getElementById('root')
);
