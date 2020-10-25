import React from "react";
import style from "./Settings.module.scss";
import Icon from "../../components/atoms/icon/Icon";
import IconWithParagraph from "../../components/atoms/IconWithParagraph/IconWithParagraph";
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
        <IconWithParagraph divClass={style.userMain} icon={user_icon} iconStyle={style.icon} className={style.username} content={"Antoni"} />
        <div className={style.userSub}>
          <IconWithParagraph icon={date_icon} iconStyle={style.iconSm} className={style.userDesc} content={"Wiek: "} value={age} />
          <IconWithParagraph icon={chart_icon} iconStyle={style.iconSm} className={style.userDesc} content={"Pomiary: "} value={measurements} />
          <IconWithParagraph icon={dumbbell_icon} iconStyle={style.iconSm} className={style.userDesc} content={"Aktywności: "} value={activities} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
