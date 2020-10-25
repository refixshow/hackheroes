import React, { useCallback, useState, useMemo } from "react"
import useEndPoint from "../../../hooks/useEndPoint"
import timeSetter from "../../../helpers/time"

const AddBMI = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const longDate = useMemo(() => timeSetter({ type: "GET_LONG_DATE" }), [])

  const [addBMI] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "bmi",
      endPointName: "bmi",
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      addBMI({
        user_id: "1",
        weight,
        height,
        BMI: Math.round(weight / Math.pow(height, 2)),
        date: timeSetter({ type: "MAKE_ISO_DATE", date: longDate }),
      })
    },
    [addBMI, longDate, weight, height]
  )

  const handleSys_pressure = useCallback((e) => {
    setWeight(e.target.value)
  }, [])
  const handleDias_pressure = useCallback((e) => {
    setHeight(e.target.value)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" required onChange={handleSys_pressure} />
      <input type="number" required onChange={handleDias_pressure} />
      <input type="submit" value="save" />
    </form>
  )
}

export default AddBMI
