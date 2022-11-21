import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import RandomGif from './pages/RandomGif';
import Search from './pages/Search';
import Home from './pages/Home';

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
