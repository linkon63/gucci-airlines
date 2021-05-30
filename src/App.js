import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/Main/About/About.js';
import Blog from './components/Main/Blog/Blog.js';
import Booking from './components/Main/Booking.js/Booking';
import CheckoutPage from './components/Main/CheckoutPage/CheckoutPage';
import Login from './components/Main/Login/Login';
import NotFound from './components/Main/NotFound/NotFound';
import ThankYouPage from './components/Main/Thankyou/ThankyouPage';
import { formatUser, PrivateRoute } from './lib/auth';
import { addUserInfo } from './redux/actions/airLinesBookingAction';
import firebase from "../src/lib/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const formattedUser = formatUser(user);
            console.log(formattedUser)
            dispatch(addUserInfo(formattedUser))
        }
    });

    return () => unsubscribe();
}, []);

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
        <Route path="/blog">
          <Blog />
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
