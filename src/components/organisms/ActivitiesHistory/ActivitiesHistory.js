import React from "react"
import { queryCache } from "react-query"
import time from "../../../helpers/time"

import useEndPoint from "../../../hooks/useEndPoint"

const ActivitiesHistory = () => {
  const [active, setActive] = useState(false)
  const activities = queryCache.getQueryData("activities")

  const handleDetails = (e) => {
    active ? setActive(false) : setActive(true)
    console.log(active)
  }

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
