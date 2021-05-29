import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Booking from './components/Main/Booking.js/Booking';
import CheckoutPage from './components/Main/CheckoutPage/CheckoutPage';
import Login from './components/Main/Login/Login';
import NotFound from './components/Main/NotFound/NotFound';
import { PrivateRoute, useProvideAuth } from './lib/auth';
import { addUserInfo } from './redux/actions/airLinesBookingAction';

function App() {
  const auth = useProvideAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserInfo(auth))
  }, [])

  return (
    // <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    // </AuthProvider>

  );
}

export default App;
