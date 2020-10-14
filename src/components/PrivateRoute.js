import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useIdentityContext()
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute
