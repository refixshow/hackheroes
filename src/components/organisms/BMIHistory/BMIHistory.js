import React from "react"
import { queryCache } from "react-query"
import { Redirect } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"
import time from "../../../helpers/time"
import style from "./BMIHistory.module.scss"
import Icon from "../../atoms/icon/Icon"
import trash_icon from "../../../assets/icons/trash.svg"
import gear_icon from "../../../assets/icons/gear.svg"
import useEndPoint from "../../../hooks/useEndPoint"

const BMIHistory = ({ setActive }) => {
  const { user } = useIdentityContext()
  const bmi = queryCache.getQueryData("bmi")

  const [deleteBMI, deleteBMIInfo] = useEndPoint({
    type: "DELETE",
    payload: { endPointName: "bmi", queryKey: "bmi", user },
  })

  if (deleteBMIInfo.isSuccess) {
    return <Redirect to="bmi" />
  }

  return (
    <div className={style.container}>
      {bmi.map((el) => (
        <details className={style.details} key={el._id}>
          <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
          <span className={style.summaryDetail}>weight: {el.weight}</span>
          <span className={style.summaryDetail}>height: {el.height}</span>
          <span className={style.summaryDetail}>bmi: {el.bmi}</span>
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
                deleteBMI({ object_id: el._id })
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

export default BMIHistory
