import React, { useCallback, useState, useMemo } from "react"
import { queryCache } from "react-query"
import { Redirect } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"
import useEndPoint from "../../../hooks/useEndPoint"
import timeSetter from "../../../helpers/time"
import style from "./AddActivity.module.scss"

const AddActivity = ({ setActive }) => {
  const userData = queryCache.getQueryData("user")
  const { user } = useIdentityContext()
  const [type, setType] = useState("running")
  const [length, setLength] = useState(0)
  const [time, setTime] = useState(0)
  const [pulse, setPulse] = useState(0)

  const longDate = useMemo(() => timeSetter({ type: "GET_LONG_DATE" }), [])

  const [addActivity, addActivityInfo] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "activities",
      endPointName: "activity",
      user,
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      addActivity({
        user_id: userData[0]._id,
        type,
        length,
        time,
        pulse,
        date: timeSetter({ type: "MAKE_ISO_DATE", date: longDate }),
      })
    },
    [addActivity, longDate, type, length, time, pulse, userData]
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

  if (addActivityInfo.isSuccess) {
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
          onChange={handleLengthChange}
          placeholder="Dystans [km]"
        />
        <input
          type="number"
          required
          onChange={handleTimeChange}
          placeholder="Czas [min]"
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

export default AddActivity
