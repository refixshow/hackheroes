import React from "react"
import { queryCache } from "react-query"
import time from "../../../helpers/time"

const ActivitiesHistory = () => {
  const activities = queryCache.getQueryData("activities")
  return (
    <div>
      <div>
        {activities.map((el) => (
          <details key={el._id}>
            <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
            <span>type: {el.type}</span>
            <span>length: {el.length}</span>
            <span>pulse: {el.pulse}</span>
          </details>
        ))}
      </div>
    </div>
  )
}

export default ActivitiesHistory
