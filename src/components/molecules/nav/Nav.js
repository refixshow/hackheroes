import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Nav.module.scss";
import NavLink from "../../atoms/navLink/NavLink";
import { queryCache } from "react-query";
import pressure_icon from "../../../assets/icons/activity.svg";
import bmi_icon from "../../../assets/icons/check.svg";
import activity_icon from "../../../assets/icons/dumbbell.svg";
import settings_icon from "../../../assets/icons/menu.svg";

const Nav = () => {
  const location = useLocation();

  const user = queryCache.getQueryData("user");

  return (
    <nav className={location.pathname === "/" || location.pathname === "/user" ? style.navigationNone : style.navigation}>
      <NavLink to='/pressure' icon={pressure_icon}>
        pressure
      </NavLink>
      <br></br>
      <NavLink to='/bmi' icon={bmi_icon}>
        bmi
      </NavLink>
      <br></br>
      <NavLink to='/activities' icon={activity_icon}>
        activities
      </NavLink>
      <br></br>
      {/* <NavLink to='/covid19'>Covid</NavLink>
      <br></br> */}
      <NavLink to='/user' icon={settings_icon}>
        user
      </NavLink>
    </nav>
  );
};

export default Nav;
