import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import AppContextProvider from "./context/AppContextProvider"
import IdentityModalContextProvider from "./context/IdentityModalContextProvider"
import { Home, Error } from "./pages"

const App = () => {
  const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL
  return (
    <div>
      <IdentityContextProvider url={url}>
        <AppContextProvider>
          <IdentityModalContextProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/activity" />
                <PrivateRoute path="/pressure" />
                <PrivateRoute path="/bmi" />
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
