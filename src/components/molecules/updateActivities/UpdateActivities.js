import React, { useCallback, useState } from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import { Redirect } from "react-router-dom"
import useEndPoint from "../../../hooks/useEndPoint"
import style from "./UpdateActivities.module.scss"

const UpdateActivities = ({ prevActivity, setActive }) => {
  const { user } = useIdentityContext()
  const [type, setType] = useState("running")
  const [length, setLength] = useState(prevActivity.length)
  const [time, setTime] = useState(prevActivity.time)
  const [pulse, setPulse] = useState(prevActivity.pulse)

  const [updateActivity, updateActivityInfo] = useEndPoint({
    type: "PATCH",
    payload: {
      queryKey: "activities",
      endPointName: "activity",
      user,
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      updateActivity({
        object_id: prevActivity._id,
        user_id: prevActivity.user_id,
        type,
        length,
        time,
        pulse,
        date: prevActivity.date,
      })
    },
    [
      prevActivity._id,
      updateActivity,
      type,
      length,
      time,
      pulse,
      prevActivity.user_id,
      prevActivity.date,
    ]
  )

  const handleTypeChange = useCallback((e) => {
    setType(e.target.value)
  }, [])
  const handleLengthChange = useCallback((e) => {
    setLength(e.target.value)
  }, [])
  const handleTimeChange = useCallback((e) => {
    setTime(e.target.value)
  }, [])
  const handlePulseChange = useCallback((e) => {
    setPulse(e.target.value)
  }, [])

  if (updateActivityInfo.isSuccess) {
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
        <label className={style.label} htmlFor="select">
          Rodzaj aktywności: &nbsp;
        </label>
        <select
          className={style.select}
          value={type}
          onChange={handleTypeChange}
          required
          id="select"
        >
          <option value="running">running</option>
          <option value="swimming">swimming</option>
        </select>
        <input
          type="number"
          required
          value={length}
          onChange={handleLengthChange}
          placeholder="Dystans [km]"
        />
        <input
          type="number"
          required
          value={time}
          onChange={handleTimeChange}
          placeholder="Czas [min]"
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

export default UpdateActivities
