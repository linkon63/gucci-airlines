import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Booking from './components/Main/Booking.js/Booking';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
