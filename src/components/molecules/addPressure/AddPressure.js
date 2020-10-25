import React, { useCallback, useState, useMemo } from "react"
import useEndPoint from "../../../hooks/useEndPoint"
import timeSetter from "../../../helpers/time"

const AddPressure = () => {
  const [sys_pressure, setSys_pressure] = useState(0)
  const [dias_pressure, setDias_pressure] = useState(0)
  const [pulse, setPulse] = useState(0)

  const longDate = useMemo(() => timeSetter({ type: "GET_LONG_DATE" }), [])

  const [addPressure] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "pressure",
      endPointName: "pressure",
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      addPressure({
        user_id: "1",
        sys_pressure,
        dias_pressure,
        pulse,
        date: timeSetter({ type: "MAKE_ISO_DATE", date: longDate }),
      })
    },
    [addPressure, longDate, sys_pressure, dias_pressure, pulse]
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

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" required onChange={handleSys_pressure} />
      <input type="number" required onChange={handleDias_pressure} />
      <input type="number" required onChange={handlePulseChange} />
      <input type="submit" value="save" />
    </form>
  )
}

export default AddPressure
