import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import IdentityModalContextProvider from "./context/IdentityModalContextProvider"
import PrivateRoute from "./components/PrivateRoute"
import AppTemplate from "./components/templates/appTemplate/AppTemplate"
import {
  Home,
  Activities,
  Pressure,
  BMI,
  Covid19,
  Error,
  User,
  Settings,
} from "./pages"
import { Nav } from "./components/molecules"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"
import "./App.module.scss"

const App = () => {
  return (
    <AppTemplate>
      <IdentityModalContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <PrivateRoute path="/activities" component={Activities} />
            <PrivateRoute path="/pressure" component={Pressure} />
            <PrivateRoute path="/bmi" component={BMI} />
            <PrivateRoute path="/covid19" component={Covid19} />
            <PrivateRoute path="/settings" component={Settings} />
            <Route path="/*" component={Error} />
          </Switch>
          <Nav />
        </Router>
      </IdentityModalContextProvider>
    </AppTemplate>
  )
}

export default App
