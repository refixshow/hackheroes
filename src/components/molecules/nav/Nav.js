import React from "react"
import { Link } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"

const Nav = () => {
  const { isLoggedIn } = useIdentityContext()

  if (true) {
    return (
      <nav>
        <Link to="/activities">activities</Link>
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
