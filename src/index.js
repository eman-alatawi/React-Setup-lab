import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clients from './components/Clients';
import Phone from './components/Phone';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/client">Clients</Link>
        </li>
        <li>
          <Link to="/phone">Phone</Link>
        </li>
      </ul>

      <Route path="/"  component={App}/>
      <Route path="/client"  component={Clients}/>
      <Route path="/phone"  component={Phone}/>

    </div>
  </Router>
);

ReactDOM.render(routing ,document.getElementById('root')
);

