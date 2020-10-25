import React from "react"
import { Link, useLocation } from "react-router-dom"
const RouterLink = ({ to }) => {
  const pathName = useLocation()

  return (
    <Link className={pathName.pathname === to ? "active" : ""} to={to}>
      s
    </Link>
  )
}

export default RouterLink
