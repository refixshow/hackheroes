import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddBMI from "../../components/molecules/addBMI/AddBMI"
import styles from "./BMI.module.scss"

const BMI = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
  })
  return (
    <main>
      <div className={styles.wrapper}>
        {active.chart && <ReactChart queryKey="bmi" endPointName="bmi" />}
        {active.history && "history"}
        {active.add && <AddBMI />}
      </div>
    </main>
  )
}

export default BMI
