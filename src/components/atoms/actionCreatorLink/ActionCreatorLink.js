import React from "react"
import { Link, useLocation } from "react-router-dom"
import Icon from "../icon/Icon"
import style from "./ActionCreatorLink.module.scss"

const ActionCreatorLink = ({ to, icon }) => {
  const { pathname } = useLocation()

  return (
    <div className={`${style.btn} ${pathname === to ? style.active : ""}`}>
      <Link to={to}>
        <Icon src={icon} className={style.icon} />
      </Link>
    </div>
  )
}

export default ActionCreatorLink
