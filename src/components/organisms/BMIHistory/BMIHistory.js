import React from "react";
import { queryCache } from "react-query";
import time from "../../../helpers/time";
import style from "./BMIHistory.module.scss";
import Icon from "../../atoms/icon/Icon";
import trash_icon from "../../../assets/icons/trash.svg";
import gear_icon from "../../../assets/icons/gear.svg";

const BMIHistory = () => {
  const bmi = queryCache.getQueryData("bmi");
  return (
    <div className={style.container}>
      {bmi.map((el) => (
        <details className={style.details} key={el._id}>
          <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
          <span className={style.summaryDetail}>weight: {el.weight}</span>
          <span className={style.summaryDetail}>height: {el.height}</span>
          <span className={style.summaryDetail}>bmi: {el.bmi}</span>
          <div className={style.buttons}>
            <Icon src={gear_icon} className={style.btn} />
            <Icon src={trash_icon} className={style.btn} />
          </div>
        </details>
      ))}
    </div>
  );
};

export default BMIHistory;
