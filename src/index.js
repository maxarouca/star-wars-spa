import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { auth } from "./firebase";


ReactDOM.render(
  <Router>
    <App auth={auth}/>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

