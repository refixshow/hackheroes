import React from "react"
import { Link, useLocation } from "react-router-dom"
import style from "./Nav.module.scss"
// import { useIdentityContext } from "react-netlify-identity-widget"

const Nav = () => {
  // const { isLoggedIn } = useIdentityContext()

  const location = useLocation()

  if (true) {
    return (
      <nav
        className={
          location.pathname === "/" || location.pathname === "/user"
            ? style.navigationNone
            : style.navigation
        }
      >
        <Link className="xd" to="/activities">
          activities
        </Link>
        <br></br>
        <Link to="/bmi">bmi</Link>
        <br></br>
        <Link to="/pressure">pressure</Link>
        <br></br>
        <Link to="/covid19">Covid</Link>
        <br></br>
        <Link to="/user">user</Link>
      </nav>
    )
  }

  return null
}

export default Nav
