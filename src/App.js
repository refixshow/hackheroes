import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

import { Home, Activities, Pressure, BMI, Error } from "./pages"
import AppContextProvider from "./context/AppContextProvider"
import IdentityModalContextProvider from "./context/IdentityModalContextProvider"
import IdentityModalComponent from "./components/IdentityModalComponent"
import PrivateRoute from "./components/PrivateRoute"

const App = () => {
  const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL
  return (
    <div>
      <IdentityContextProvider url={url}>
        <AppContextProvider>
          <IdentityModalContextProvider>
            <Router>
              <IdentityModalComponent />
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/activities" component={Activities} />
                <PrivateRoute path="/pressure" component={Pressure} />
                <PrivateRoute path="/bmi" component={BMI} />
                <Route path="/*" component={Error} />
              </Switch>
            </Router>
          </IdentityModalContextProvider>
        </AppContextProvider>
      </IdentityContextProvider>
    </div>
  )
}

export default App
