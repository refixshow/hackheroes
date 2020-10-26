import React, { useState } from "react"
import ReactChart from "../../components/organisms/ReactChart"
import AddPressure from "../../components/molecules/addPressure/AddPressure"
import UpdatePressure from "../../components/molecules/updatePressure/UpdatePressure"
import ActionCreator from "../../components/organisms/actionCreator/ActionCreator"
import PressureHistory from "../../components/organisms/PressureHistory/PressureHistory"
import style from "./Pressure.module.scss"

const Pressure = () => {
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
      <ActionCreator active={active} setActive={setActive} title="Pressure" />
      <div className={style.wrapper}>
        {active.chart && (
          <ReactChart queryKey="pressure" endPointName="pressure" />
        )}
        {active.history && <PressureHistory setActive={setActive} />}
        {active.add && <AddPressure setActive={setActive} />}
        {active.update.isUpdating && (
          <UpdatePressure
            setActive={setActive}
            prevActivity={active.update.object}
          />
        )}
      </div>
    </main>
  )
}

export default Pressure
