import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddBMI from "../../components/molecules/addBMI/AddBMI"
import ActionCreator from "../../components/organisms/actionCreator/ActionCreator"
import styles from "./BMI.module.scss"

const BMI = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
  })
  return (
    <main>
      <ActionCreator active={active} setActive={setActive} />
      <div className={styles.wrapper}>
        {active.chart && <ReactChart queryKey="bmi" endPointName="bmi" />}
        {active.history && "history"}
        {active.add && <AddBMI />}
      </div>
    </main>
  )
}

export default BMI
