import React from "react";
import style from "./Settings.module.scss";
import Icon from "../../components/atoms/icon/Icon";
import user_icon from "../../assets/icons/account.svg";
import chart_icon from "../../assets/icons/chart.svg";
import dumbbell_icon from "../../assets/icons/dumbbell.svg";
import date_icon from "../../assets/icons/calendar.svg";

const Settings = () => {
  let age = 45;
  let measurements = 10;
  let activities = 20;

  return (
    <div className={style.container}>
      <div className={style.userPanel}>
        <div className={style.userMain}>
          <Icon src={user_icon} className={style.icon} />
          <p className={style.username}>Antoni</p>
        </div>
        <div className={style.userSub}>
          <div>
            <Icon src={date_icon} className={style.iconSm} />
            <p className={style.userDesc}>Wiek: {age}</p>
          </div>
          <div>
            <Icon src={chart_icon} className={style.iconSm} />
            <p className={style.userDesc}>Pomiary: {measurements}</p>
          </div>
          <div>
            <Icon src={dumbbell_icon} className={style.iconSm} />
            <p className={style.userDesc}>Aktywności: {activities}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
