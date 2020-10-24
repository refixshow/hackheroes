import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ReactQueryDevtools } from "react-query-devtools"

import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

import IdentityModalContextProvider from "./context/IdentityModalContextProvider"
// import PrivateRoute from "./components/PrivateRoute"
import { Home, Activities, Pressure, BMI, Covid19, Error, User } from "./pages"
import { Nav } from "./components/molecules"

const App = () => {
  return (
    <div>
      <IdentityModalContextProvider>
        <ReactQueryDevtools initialIsOpen />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/activities" component={Activities} />
            <Route path="/pressure" component={Pressure} />
            <Route path="/bmi" component={BMI} />
            <Route path="/covid19" component={Covid19} />
            <Route path="/*" component={Error} />
          </Switch>
          <Nav />
        </Router>
      </IdentityModalContextProvider>
    </div>
  )
}

export default App
