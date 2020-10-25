import React from "react"
import { queryCache } from "react-query"
import time from "../../../helpers/time"

const PressureHistory = () => {
  const pressure = queryCache.getQueryData("pressure")
  return (
    <div>
      <div>
        {pressure.map((el) => (
          <details key={el._id}>
            <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
            <span>sys_pressure: {el.sys_pressure}</span>
            <span>dias_pressure: {el.dias_pressure}</span>
            <span>pulse: {el.pulse}</span>
          </details>
        ))}
      </div>
    </div>
  )
}

export default PressureHistory
