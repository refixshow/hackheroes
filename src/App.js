import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ReactQueryDevtools } from "react-query-devtools"

import IdentityModalContextProvider from "./context/IdentityModalContextProvider"

import PrivateRoute from "./components/PrivateRoute"
import AppTemplate from "./components/templates/appTemplate/AppTemplate"
import { Home, Activities, Pressure, BMI, Covid19, Error, User } from "./pages"
import { Nav } from "./components/molecules"
import ActionCreator from "./components/organisms/actionCreator/ActionCreator"

import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"
import "./App.modules.scss"

const App = () => {
  return (
    <AppTemplate>
      {/* <ReactQueryDevtools initialIsOpen /> */}
      <IdentityModalContextProvider>
        <Router>
          <ActionCreator />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <PrivateRoute path="/activities" component={Activities} />
            <PrivateRoute path="/pressure" component={Pressure} />
            <PrivateRoute path="/bmi" component={BMI} />
            <PrivateRoute path="/covid19" component={Covid19} />
            <Route path="/*" component={Error} />
          </Switch>
          <Nav />
        </Router>
      </IdentityModalContextProvider>
    </AppTemplate>
  )
}

export default App
