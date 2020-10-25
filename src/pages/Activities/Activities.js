import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddActivity from "../../components/molecules/addActivity/AddActivity"
import ActionCreator from "../../components/organisms/actionCreator/ActionCreator"
import ActivitiesHistory from "../../components/organisms/ActivitiesHistory/ActivitiesHistory"
import styles from "./Activities.module.scss"

const Activities = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
    update: false,
  })

  return (
    <main>
      <ActionCreator active={active} setActive={setActive} title="Activities" />
      <div className={styles.wrapper}>
        {active.chart && (
          <ReactChart queryKey="activities" endPointName="activity" />
        )}
        {active.history && (
          <ActivitiesHistory active={active} setActive={setActive} />
        )}
        {active.add && <AddActivity />}
        {active.update && "update"}
      </div>
    </main>
  )
}

export default Activities
