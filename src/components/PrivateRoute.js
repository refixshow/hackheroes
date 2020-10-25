import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"
import { queryCache } from "react-query"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useIdentityContext()
  const user = queryCache.getQueryData("user")

  if (isLoggedIn) {
    if (user) {
      return (
        <Route
          {...rest}
          render={(props) =>
            user.length > 0 ? <Component {...props} /> : <Redirect to="/user" />
          }
        />
      )
    }
  }
  return <Redirect to="/" />
}

export default PrivateRoute
