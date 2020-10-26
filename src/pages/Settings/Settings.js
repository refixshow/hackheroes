import React from "react"
import moment from "moment"
import { useIdentityContext } from "react-netlify-identity-widget"
import { queryCache } from "react-query"
import style from "./Settings.module.scss"
import IconWithParagraph from "../../components/atoms/IconWithParagraph/IconWithParagraph"
import user_icon from "../../assets/icons/account.svg"
import chart_icon from "../../assets/icons/chart.svg"
import dumbbell_icon from "../../assets/icons/dumbbell.svg"
import date_icon from "../../assets/icons/calendar.svg"

const Settings = () => {
  const activities = queryCache.getQueryData("activities")
  const bmi = queryCache.getQueryData("bmi")
  const userData = queryCache.getQueryData("user")
  const { user } = useIdentityContext()

  console.log(user)

  let age = 45

  return (
    <div className={style.container}>
      <div className={style.userPanel}>
        <IconWithParagraph
          divClass={style.userMain}
          icon={user_icon}
          iconStyle={style.icon}
          className={style.username}
          content={user.user_metadata.full_name}
        />
        <div className={style.userSub}>
          <IconWithParagraph
            icon={date_icon}
            iconStyle={style.iconSm}
            className={style.userDesc}
            content={"Wiek: "}
            value={age}
          />
          <IconWithParagraph
            icon={chart_icon}
            iconStyle={style.iconSm}
            className={style.userDesc}
            content={"Pomiary: "}
            value={bmi ? bmi.length : 0}
          />
          <IconWithParagraph
            icon={dumbbell_icon}
            iconStyle={style.iconSm}
            className={style.userDesc}
            content={"Aktywności: "}
            value={activities ? activities.length : 0}
          />
        </div>
      </div>
    </div>
  )
}

export default Settings
