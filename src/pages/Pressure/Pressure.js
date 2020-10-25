import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddPressure from "../../components/molecules/addPressure/AddPressure"
import ActionCreator from "../../components/organisms/actionCreator/ActionCreator"
import style from "./Pressure.module.scss"

const Pressure = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
  })

  return (
    <main>
      <ActionCreator active={active} setActive={setActive} />
      <div className={style.wrapper}>
        {active.chart && (
          <ReactChart queryKey="pressure" endPointName="pressure" />
        )}
        {active.history && "history"}
        {active.add && <AddPressure />}
      </div>
    </main>
  )
}

export default Pressure
