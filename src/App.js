import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import AppContextProvider from "./context/AppContextProvider"
import IdentityModalContextProvider from "./context/IdentityModalContextProvider"
import IdentityModalComponent from "./components/IdentityModalComponent"
import { Home, Activities, BMI, Error } from "./pages"
import { queryCache } from "react-query"

import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

const App = () => {
  const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL
  return (
    <div>
      <IdentityContextProvider url={url}>
        <AppContextProvider>
          <IdentityModalContextProvider>
            <Router>
              <IdentityModalComponent />
              <Link to="/bmi">BMI</Link>
              <Link to="/activities">ACTIVITIES</Link>
              <button
                onClick={() => {
                  queryCache.clear()
                }}
              >
                adasd
              </button>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/activities" component={Activities} />
                <PrivateRoute path="/pressure" />
                <Route path="/bmi" component={BMI} />
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
