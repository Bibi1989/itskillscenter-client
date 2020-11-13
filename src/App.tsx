import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Home from './components/Home';
import Navbar from './components/Navbar';

import 'antd/dist/antd.css';
import { UserProvider } from './context/UserContext';
import Axios from 'axios';
import SuccesComponent from './components/SuccesComponent';

Axios.defaults.baseURL = "http://localhost:5005/auth/v1"

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user' component={SuccesComponent} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
