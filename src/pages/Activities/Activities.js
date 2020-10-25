import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddActivity from "../../components/molecules/addActivity/AddActivity"
import ActionCreator from "../../components/organisms/actionCreator/ActionCreator"
import ActivityHistory from "../../components/organisms/ActivitiesHistory/ActivitiesHistory"
import styles from "./Activities.module.scss"

const Activities = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
  })

  return (
    <main>
      <ActionCreator active={active} setActive={setActive} />
      <div className={styles.wrapper}>
        {active.chart && (
          <ReactChart queryKey="activities" endPointName="activity" />
        )}
        {active.history && <ActivityHistory />}
        {active.add && <AddActivity />}
      </div>
    </main>
  )
}

export default Activities
