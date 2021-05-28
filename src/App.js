import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Booking from './components/Main/Booking.js/Booking';
import CheckoutPage from './components/Main/CheckoutPage/CheckoutPage';
import Login from './components/Main/Login/Login';
import NotFound from './components/Main/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/book/:id">
          <Booking />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
