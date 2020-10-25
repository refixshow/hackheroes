import React, { useCallback, useState, useMemo } from "react"
import useEndPoint from "../../../hooks/useEndPoint"
import timeSetter from "../../../helpers/time"
import style from "./AddBMI.module.scss"

const AddBMI = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const bmi = Math.round((weight / Math.pow(height, 2)) * 100) / 100

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
        bmi,
        date: timeSetter({ type: "MAKE_ISO_DATE", date: longDate }),
      })
    },
    [addBMI, longDate, weight, height, bmi]
  )

  const handleHeightChange = useCallback((e) => {
    setHeight(e.target.value)
  }, [])
  const handleWeightChange = useCallback((e) => {
    setWeight(e.target.value)
  }, [])

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="number"
          required
          onChange={handleSys_pressure}
          placeholder="Waga [kg]"
        />
        <input
          type="number"
          required
          onChange={handleDias_pressure}
          placeholder="Wzrost [cm]"
        />
        <input type="submit" className={style.btn} value="save" />
      </form>
    </div>
  )
}

export default AddBMI
