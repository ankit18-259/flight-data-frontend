import logo from './logo.svg';
import './App.css';
import Login from './components/login.js'
import Signup from './components/signup.js'
import FlightSearch from './components/search.js'
import Book from './components/book.js'
import Result from './components/result.js'
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


function App() {

  // const token = getToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <BrowserRouter>
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
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
