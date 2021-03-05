import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage';
import './styles/global.css'
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import OperatorPage from './pages/OperatorPage';
import DokterPage from './pages/DokterPage';
import firebase from '../src/config/firebase';

// console.log(firebase)

ReactDOM.render(
  <Router>
       <Switch>
		      <Route exact path="/" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/operator" component={OperatorPage} />
          <Route exact path="/dokter" component={DokterPage} />
	    </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
