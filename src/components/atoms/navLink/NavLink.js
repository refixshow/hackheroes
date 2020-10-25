import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../icon/Icon";
import style from "./NavLink.module.scss";

const RouterLink = ({ to, children, icon }) => {
  const { pathname } = useLocation();

  return (
    <div className={`${style.btn} ${pathname === to ? style.active : ""}`}>
      <Link to={to}>
        <Icon src={icon} className={style.icon} />
      </Link>
      {pathname === to ? <p className={style.desc}>{children}</p> : null}
    </div>
  );
};

export default RouterLink;
