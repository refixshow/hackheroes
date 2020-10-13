import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home, Error } from "./pages"


const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/*" component={Error}/>
                </Switch>
            </Router>

        </div>
    )
}

export default App
