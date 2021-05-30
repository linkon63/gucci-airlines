import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/Main/About/About.js';
import Booking from './components/Main/Booking.js/Booking';
import CheckoutPage from './components/Main/CheckoutPage/CheckoutPage';
import Login from './components/Main/Login/Login';
import NotFound from './components/Main/NotFound/NotFound';
import ThankYouPage from './components/Main/Thankyou/ThankyouPage';
import { PrivateRoute } from './lib/auth';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/book/:id">
          <Booking />
        </PrivateRoute>
        <PrivateRoute path="/checkout">
          <CheckoutPage />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/thankyou">
          <ThankYouPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
