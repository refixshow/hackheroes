import React, { useCallback, useState, useMemo } from "react"
import useEndPoint from "../../../hooks/useEndPoint"
import timeSetter from "../../../helpers/time"

const AddActivity = () => {
  const [type, setType] = useState("")
  const [length, setLength] = useState(0)
  const [time, setTime] = useState(0)
  const [pulse, setPulse] = useState(0)

  const longDate = useMemo(() => timeSetter({ type: "GET_LONG_DATE" }), [])

  const [addActivity] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "activities",
      endPointName: "activity",
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      addActivity({
        user_id: "1",
        type,
        length,
        time,
        pulse,
        date: timeSetter({ type: "MAKE_ISO_DATE", date: longDate }),
      })
    },
    [addActivity, longDate, type, length, time, pulse]
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

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleTypeChange} required>
        <option value="running">running</option>
        <option value="swimming">swimming</option>
      </select>
      <input type="number" required onChange={handleLengthChange} />
      <input type="number" required onChange={handleTimeChange} />
      <input type="number" required onChange={handlePulseChange} />
      <input type="submit" value="save" />
    </form>
  )
}

export default AddActivity
