import React from "react";
import { queryCache } from "react-query";
import time from "../../../helpers/time";
import Icon from "../../atoms/icon/Icon";
import style from "./PressureHistory.module.scss";
import trash_icon from "../../../assets/icons/trash.svg";
import gear_icon from "../../../assets/icons/gear.svg";

const PressureHistory = () => {
  const pressure = queryCache.getQueryData("pressure");
  return (
    <div className={style.container}>
      {pressure.map((el) => (
        <details className={style.details} key={el._id}>
          <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
          <span className={style.summaryDetail}>sys_pressure: {el.sys_pressure}</span>
          <span className={style.summaryDetail}>dias_pressure: {el.dias_pressure}</span>
          <span className={style.summaryDetail}>pulse: {el.pulse}</span>
          <div className={style.buttons}>
            <Icon src={gear_icon} className={style.btn} />
            <Icon src={trash_icon} className={style.btn} />
          </div>
        </details>
      ))}
    </div>
  );
};

export default PressureHistory;
