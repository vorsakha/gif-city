import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import RandomGif from './screens/RandomGif';
import Search from './screens/Search';
import Home from './screens/Home';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/random">
          <RandomGif />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}
