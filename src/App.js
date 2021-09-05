
//essential components
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//custom components
import Login from './components/login.js'
import Signup from './components/signup.js'
import FlightSearch from './components/search.js'
import Book from './components/book.js'
import Result from './components/result.js'
import BookHistory from './components/book-history.js'

//UI components
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

/**
 * Root function of the Frontend Project
 * used react-router-dom for routing 
 * UI components by Material UI
 * Axios for API calls
 * Uses state and localstorage for storing and presenting data
 */

function App() {

  const history = useHistory()

  const handleClickLogin = () => {
    history.push('/login')
  }

  const handleClickSignup = () => {
    history.push('/signup')
  }

  const handleClickHistory = () => {
    history.push('/history')
  }

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Flight Booking Portal
          </Typography>
          <div style={{ float: "right" }}>
            <Button onClick={handleClickLogin} color="inherit">Login</Button>
            <Button onClick={handleClickSignup} color="inherit">Signup</Button>
            <Button onClick={handleClickHistory} color="inherit">Booked History</Button>
          </div>
        </Toolbar>
      </AppBar>

      
          <Switch>
            <Route path="/login">
               <Login />
            </Route>
            <Route path="/search">
              <FlightSearch />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/book">
              <Book />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path='/history'>
              <BookHistory />
            </Route>
          </Switch>
        
    </div>
  );
}

export default App;
