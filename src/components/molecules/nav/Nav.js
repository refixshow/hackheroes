import React from "react"
import { useLocation } from "react-router-dom"
import style from "./Nav.module.scss"
import NavLink from "../../atoms/navLink/NavLink"
import pressure_icon from "../../../assets/icons/activity.svg"
import bmi_icon from "../../../assets/icons/check.svg"
import activity_icon from "../../../assets/icons/dumbbell.svg"
import settings_icon from "../../../assets/icons/menu.svg"

const Nav = () => {
  const location = useLocation()

  return (
    <nav
      className={
        location.pathname === "/" || location.pathname === "/user"
          ? style.navigationNone
          : style.navigation
      }
    >
      <NavLink to="/pressure" icon={pressure_icon}>
        pressure
      </NavLink>
      <NavLink to="/bmi" icon={bmi_icon}>
        bmi
      </NavLink>
      <NavLink to="/activities" icon={activity_icon}>
        activities
      </NavLink>
      <NavLink to="/settings" icon={settings_icon}>
        user
      </NavLink>
    </nav>
  )
}

export default Nav
