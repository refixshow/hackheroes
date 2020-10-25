import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { useIdentityContext } from "react-netlify-identity-widget"
import { queryCache } from "react-query"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = queryCache.getQueryData("user")

  // const { isLoggedIn } = useIdentityContext()
  if (true) {
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
