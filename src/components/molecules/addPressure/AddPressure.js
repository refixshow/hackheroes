import React, { useCallback, useState, useMemo } from "react"
import { queryCache } from "react-query"
import { Redirect } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"
import useEndPoint from "../../../hooks/useEndPoint"
import timeSetter from "../../../helpers/time"
import style from "./AddPressure.module.scss"

const AddPressure = ({ setActive }) => {
  const userData = queryCache.getQueryData("user")
  const { user } = useIdentityContext()
  const [sys_pressure, setSys_pressure] = useState(0)
  const [dias_pressure, setDias_pressure] = useState(0)
  const [pulse, setPulse] = useState(0)

  const longDate = useMemo(() => timeSetter({ type: "GET_LONG_DATE" }), [])

  const [addPressure, addPressureInfo] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "pressure",
      endPointName: "pressure",
      user,
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      addPressure({
        user_id: userData[0]._id,
        sys_pressure,
        dias_pressure,
        pulse,
        date: timeSetter({ type: "MAKE_ISO_DATE", date: longDate }),
      })
    },
    [addPressure, longDate, sys_pressure, dias_pressure, pulse, userData]
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

  if (addPressureInfo.isSuccess) {
    setActive({
      chart: true,
      history: false,
      add: false,
      update: {
        isUpdating: false,
        object: "",
      },
    })

    return <Redirect to="pressure" />
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="number"
          required
          onChange={handleSys_pressure}
          placeholder="Ciśnienie skurczowe"
        />
        <input
          type="number"
          required
          onChange={handleDias_pressure}
          placeholder="Ciśnienie rozkurczowe"
        />
        <input
          type="number"
          required
          onChange={handlePulseChange}
          placeholder="Twój puls [/min]"
        />
        <input type="submit" className={style.btn} value="save" />
      </form>
    </div>
  )
}

export default AddPressure
