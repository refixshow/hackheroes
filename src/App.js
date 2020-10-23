import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

import AppContextProvider from "./context/AppContextProvider"
import PrivateRoute from "./components/PrivateRoute"
import { Home, Activities, Pressure, BMI, Covid19, Error } from "./pages"
import { Nav } from "./components/molecules"

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/activities" component={Activities} />
            <PrivateRoute path="/pressure" component={Pressure} />
            <PrivateRoute path="/bmi" component={BMI} />
            <PrivateRoute path="/covid19" component={Covid19} />
            <Route path="/*" component={Error} />
          </Switch>
          <Nav />
        </Router>
      </AppContextProvider>
    </div>
  )
}

export default App
