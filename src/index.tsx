import React from 'react';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Home,CreateCar, Cars, UpdateCar} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav} from 'react-bootstrap';
import logo from './assets/img/Logo2.png';
import './styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';

render(
  <React.StrictMode>
    <Router>
    <Navbar className="navbar-color">
    <Navbar.Brand>
      <img
        alt="Car Members"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      <Link className="members-color" to="/">Carpi's Members Area</Link>
    </Navbar.Brand>
    <Nav className="move-nav" activeKey='/'>

      <Nav.Item>
        <Nav.Link>
          <Link to='/'>Home</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to='/cars'>Display Your Car</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>

    </Navbar>
      
      <Switch>
        <Route exact path="/">
          <Home title="Carpi's"/>
        </Route>
        <Route path="/create">
          <CreateCar />
        </Route>
        
        <Route path="/cars">
          <Cars />
        </Route>
        <Route path="/update">
          <UpdateCar />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
