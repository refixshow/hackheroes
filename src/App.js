import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AppContextProvider from "./context/AppContextProvider"

import { Home, Error } from "./pages"

const App = () => {
    return (
        <div>
            <AppContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="login" />
                        <Route path="activity" />
                        <Route path="pressure" />
                        <Route path="bmi" />
                        <Route exact path="/*" component={Error}/>
                    </Switch>
                </Router>
            </AppContextProvider>
        </div>
    )
}

export default App
