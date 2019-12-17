import React from 'react';
import{ Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className='App' >
      <Link to ='/login' className='nav-link'>Login</Link>
      <Link to ='/friends' className='nav-link'>Friends</Link>
      <Switch>
        <Route path ='/login' component={Login}/> 
        <PrivateRoute path ='/friends' component={FriendsList}/> 
        <Route component={Login}/> 
      </Switch>
    </div>
  );
}

export default App;
