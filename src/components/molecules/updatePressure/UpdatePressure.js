import React, { useCallback, useState } from "react"
import { Redirect } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"
import useEndPoint from "../../../hooks/useEndPoint"
import style from "./UpdatePressure.module.scss"

const UpdatePressure = ({ prevActivity, setActive }) => {
  const { user } = useIdentityContext()
  const [sys_pressure, setSys_pressure] = useState(prevActivity.sys_pressure)
  const [dias_pressure, setDias_pressure] = useState(prevActivity.dias_pressure)
  const [pulse, setPulse] = useState(prevActivity.pulse)

  const [updatePressure, updatePressureInfo] = useEndPoint({
    type: "PATCH",
    payload: {
      queryKey: "pressure",
      endPointName: "pressure",
      user,
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      updatePressure({
        object_id: prevActivity._id,
        user_id: prevActivity.user_id,
        sys_pressure,
        dias_pressure,
        pulse,
        date: prevActivity.date,
      })
    },
    [
      updatePressure,
      sys_pressure,
      dias_pressure,
      pulse,
      prevActivity._id,
      prevActivity.user_id,
      prevActivity.date,
    ]
  )

  const handleSys_pressure = useCallback((e) => {
    setSys_pressure(e.target.value)
  }, [])
  const handleDias_pressure = useCallback((e) => {
    setDias_pressure(e.target.value)
  }, [])
  const handlePulseChange = useCallback((e) => {
    setPulse(e.target.value)
  }, [])
  if (updatePressureInfo.isSuccess) {
    setActive({
      chart: true,
      history: false,
      add: false,
      update: {
        isUpdating: false,
        object: "",
      },
    })

    return <Redirect to="activities" />
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="number"
          required
          value={sys_pressure}
          onChange={handleSys_pressure}
          placeholder="Ciśnienie skurczowe"
        />
        <input
          type="number"
          required
          value={dias_pressure}
          onChange={handleDias_pressure}
          placeholder="Ciśnienie rozkurczowe"
        />
        <input
          type="number"
          required
          value={pulse}
          onChange={handlePulseChange}
          placeholder="Twój puls [/min]"
        />
        <input type="submit" className={style.btn} value="save" />
      </form>
    </div>
  )
}

export default UpdatePressure
