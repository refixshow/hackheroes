import React from "react"
import { useLocation } from "react-router-dom"
import style from "./Nav.module.scss"
import NavLink from "../../atoms/navLink/NavLink"
// import { isLoggedIn } from "react-netlify-identity-widget"

const Nav = () => {
  const location = useLocation()

  return (
    <nav
      className={`${style.self} ${
        location.pathname === "/" || location.pathname === "/user" || false
          ? style.navigationNone
          : style.navigation
      }`}
    >
      <NavLink to="/activities">activities</NavLink>
      <NavLink to="/bmi">bmi</NavLink>
      <NavLink to="/pressure">pressure</NavLink>
      <NavLink to="/covid19">Covid</NavLink>
      <NavLink to="/user">user</NavLink>
    </nav>
  )
}

export default Nav
