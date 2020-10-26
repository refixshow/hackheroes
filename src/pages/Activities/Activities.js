import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddActivities from "../../components/molecules/addActivities/AddActivities"
import UpdateActivities from "../../components/molecules/updateActivities/UpdateActivities"
import ActionCreator from "../../components/organisms/actionCreator/ActionCreator"
import ActivitiesHistory from "../../components/organisms/ActivitiesHistory/ActivitiesHistory"
import styles from "./Activities.module.scss"

const Activities = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
    update: {
      isUpdating: false,
      object: "",
    },
  })

  return (
    <main>
      <ActionCreator active={active} setActive={setActive} title="Activities" />
      <div className={styles.wrapper}>
        {active.chart && (
          <ReactChart queryKey="activities" endPointName="activity" />
        )}
        {active.history && <ActivitiesHistory setActive={setActive} />}
        {active.add && <AddActivities setActive={setActive} />}
        {active.update.isUpdating && (
          <UpdateActivities
            setActive={setActive}
            prevActivity={active.update.object}
          />
        )}
      </div>
    </main>
  )
}

export default Activities
