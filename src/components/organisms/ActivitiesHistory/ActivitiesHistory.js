import React, { useCallback } from "react"
import { queryCache } from "react-query"
import time from "../../../helpers/time"
import style from "./ActivitiesHistory.module.scss"
import Icon from "../../atoms/icon/Icon"
import trash_icon from "../../../assets/icons/trash.svg"
import gear_icon from "../../../assets/icons/gear.svg"
import useEndPoint from "../../../hooks/useEndPoint"
import { Redirect } from "react-router-dom"

const ActivitiesHistory = ({ setActive }) => {
  const activities = queryCache.getQueryData("activities")

  const [deleteActivity, deleteActivityInfo] = useEndPoint({
    type: "DELETE",
    payload: { endPointName: "activity", queryKey: "activities" },
  })

  const handleUpdateChange = useCallback(() => {
    setActive({
      chart: false,
      history: false,
      add: false,
      update: true,
    })
  }, [setActive])

  if (deleteActivityInfo.isSuccess) {
    return <Redirect to="activities" />
  }

  return (
    <div className={style.container}>
      {activities.map((el) => (
        <details className={style.details} key={el._id}>
          <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
          <span className={style.summaryDetail}>type: {el.type}</span>
          <span className={style.summaryDetail}>length: {el.length}</span>
          <span className={style.summaryDetail}>pulse: {el.pulse}</span>
          <div className={style.buttons}>
            <button onClick={handleUpdateChange}>
              <Icon src={gear_icon} className={style.btn} />
            </button>
            <button
              onClick={() => {
                deleteActivity({ object_id: el._id })
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

export default ActivitiesHistory
