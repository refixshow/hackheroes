import React, { useState } from "react"
import ReactChart from "../components/organisms/ReactChart"

import AddActivity from "../components/molecules/addActivity/AddActivity"

import style from "./Activities.module.scss"

const Activities = () => {
  const [active, setActiveChart] = useState({
    chart: true,
    history: false,
    add: false,
  })
  return (
    <main>
      <div className={style.content}>
        {active.chart && (
          <ReactChart queryKey="activities" endPointName="activity" />
        )}
        {active.history && "history"}
        {active.add && <AddActivity />}
      </div>
    </main>
  )
}

export default Activities
