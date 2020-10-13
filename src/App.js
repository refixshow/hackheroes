import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import AppContextProvider from "./context/AppContextProvider"
import { Home, Login, Error } from "./pages"

const App = () => {
  const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL
  return (
    <div>
      <IdentityContextProvider url={url}>
        <AppContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/activity" />
              <Route path="/pressure" />
              <Route path="/bmi" />
              <Route path="/*" component={Error} />
            </Switch>
          </Router>
        </AppContextProvider>
      </IdentityContextProvider>
    </div>
  )
}

export default App
