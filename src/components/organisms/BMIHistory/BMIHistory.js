import React from "react"
import { queryCache } from "react-query"
import time from "../../../helpers/time"

const BMIHistory = () => {
  const bmi = queryCache.getQueryData("bmi")
  return (
    <div>
      <div>
        {bmi.map((el) => (
          <details key={el._id}>
            <summary>{time({ type: "MAKE_LONG_DATE", date: el.date })}</summary>
            <span>weight: {el.weight}</span>
            <span>height: {el.height}</span>
            <span>bmi: {el.bmi}</span>
          </details>
        ))}
      </div>
    </div>
  )
}

export default BMIHistory
