import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { queryCache } from "react-query";
import time from "../../../helpers/time";
import style from "./ActivitiesHistory.module.scss";
import Icon from "../../atoms/icon/Icon";
import trash_icon from "../../../assets/icons/trash.svg";
import gear_icon from "../../../assets/icons/gear.svg";

const ActivitiesHistory = () => {
  const activities = queryCache.getQueryData("activities");

  return (
    <div className={style.container}>
      {activities.map((el) => (
        <details className={style.details} key={el._id}>
          <summary className={style.summary}>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
          <span className={style.summaryDetail}>type: {el.type}</span>
          <span className={style.summaryDetail}>length: {el.length}</span>
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

export default ActivitiesHistory;
