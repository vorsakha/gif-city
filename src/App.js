import React from "react"
import { Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import RandomGif from "./components/RandomGif"
import Search from "./components/Search"

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
    )
}