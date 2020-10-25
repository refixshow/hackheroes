import React from "react"
import { Link, useLocation } from "react-router-dom"
import style from "./NavLink.module.scss"

const RouterLink = ({ to, children }) => {
  const { pathname } = useLocation()

  return (
    <Link className={pathname === to ? style.active : ""} to={to}>
      {children}
    </Link>
  )
}

export default RouterLink
