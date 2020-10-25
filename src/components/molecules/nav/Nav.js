import React from "react"
import { useLocation } from "react-router-dom"
import style from "./Nav.module.scss"
import NavLink from "../../atoms/navLink/NavLink"
import { queryCache } from "react-query"

const Nav = () => {
  const location = useLocation()

  const user = queryCache.getQueryData("user")

  return (
    <nav
      className={
        location.pathname === "/" || location.pathname === "/user"
          ? style.navigationNone
          : style.navigation
      }
    >
      <NavLink to="/activities">activities</NavLink>
      <br></br>
      <NavLink to="/bmi">bmi</NavLink>
      <br></br>
      <NavLink to="/pressure">pressure</NavLink>
      <br></br>
      <NavLink to="/covid19">Covid</NavLink>
      <br></br>
      <NavLink to="/user">user</NavLink>
    </nav>
  )
}

export default Nav
