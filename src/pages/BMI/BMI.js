import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddBMI from "../../components/molecules/addBMI/AddBMI"
import UpdateBMI from "../../components/molecules/updateBMI/UpdateBMI"
import BMIHistory from "../../components/organisms/BMIHistory/BMIHistory"
import ActionCreator from "../../components/organisms/actionCreator/ActionCreator"
import styles from "./BMI.module.scss"

const BMI = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
    delete: false,
    update: {
      isUpdating: false,
      object: "",
    },
  })
  return (
    <main>
      <ActionCreator active={active} setActive={setActive} title="BMI" />
      <div className={styles.wrapper}>
        {active.chart && <ReactChart queryKey="bmi" endPointName="bmi" />}
        {active.history && <BMIHistory setActive={setActive} />}
        {active.add && <AddBMI setActive={setActive} />}
        {active.update.isUpdating && (
          <UpdateBMI
            setActive={setActive}
            prevActivity={active.update.object}
          />
        )}
      </div>
    </main>
  )
}

export default BMI
