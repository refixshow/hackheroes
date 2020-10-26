import React from "react"
import { Redirect } from "react-router-dom"
import { queryCache } from "react-query"
import { useIdentityContext } from "react-netlify-identity-widget"
import time from "../../../helpers/time"
import Icon from "../../atoms/icon/Icon"
import style from "./PressureHistory.module.scss"
import trash_icon from "../../../assets/icons/trash.svg"
import gear_icon from "../../../assets/icons/gear.svg"
import useEndPoint from "../../../hooks/useEndPoint"

const PressureHistory = ({ setActive }) => {
  const { user } = useIdentityContext()
  const pressure = queryCache.getQueryData("pressure")

  const [deletePressure, deletePressureInfo] = useEndPoint({
    type: "DELETE",
    payload: { endPointName: "pressure", queryKey: "pressure", user },
  })

  if (deletePressureInfo.isSuccess) {
    return <Redirect to="pressure" />
  }

  return (
    <div className={style.container}>
      {pressure.map((el) => (
        <details className={style.details} key={el._id}>
          <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
          <span className={style.summaryDetail}>
            sys_pressure: {el.sys_pressure}
          </span>
          <span className={style.summaryDetail}>
            dias_pressure: {el.dias_pressure}
          </span>
          <span className={style.summaryDetail}>pulse: {el.pulse}</span>
          <div className={style.buttons}>
            <button
              onClick={() => {
                setActive({
                  chart: false,
                  history: false,
                  add: false,
                  update: {
                    isUpdating: true,
                    object: el,
                  },
                })
              }}
            >
              <Icon src={gear_icon} className={style.btn} />
            </button>
            <button
              onClick={() => {
                deletePressure({ object_id: el._id })
                setActive({
                  chart: true,
                  history: false,
                  add: false,
                  update: false,
                })
              }}
            >
              <Icon src={trash_icon} className={style.btn} />
            </button>
          </div>
        </details>
      ))}
    </div>
  )
}

export default PressureHistory
