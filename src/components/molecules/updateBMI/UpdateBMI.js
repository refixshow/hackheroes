import React, { useCallback, useState } from "react"
import { Redirect } from "react-router-dom"
import useEndPoint from "../../../hooks/useEndPoint"
import style from "./UpdateBMI.module.scss"

const UpdateBMI = ({ prevActivity, setActive }) => {
  const [weight, setWeight] = useState(prevActivity.weight)
  const [height, setHeight] = useState(prevActivity.height)

  const [updateBMI, updateBMIInfo] = useEndPoint({
    type: "PATCH",
    payload: {
      queryKey: "bmi",
      endPointName: "bmi",
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      updateBMI({
        object_id: prevActivity._id,
        user_id: prevActivity.user_id,
        weight,
        height,
        date: prevActivity.date,
      })
    },
    [
      prevActivity._id,
      updateBMI,
      weight,
      height,
      prevActivity.user_id,
      prevActivity.date,
    ]
  )

  const handleWeight = useCallback((e) => {
    setWeight(e.target.value)
  }, [])
  const handleHeight = useCallback((e) => {
    setHeight(e.target.value)
  }, [])
  if (updateBMIInfo.isSuccess) {
    setActive({
      chart: true,
      history: false,
      add: false,
      update: {
        isUpdating: false,
        object: "",
      },
    })

    return <Redirect to="bmi" />
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="number"
          required
          value={weight}
          onChange={handleWeight}
          placeholder="Waga [kg]"
        />
        <input
          type="number"
          required
          value={height}
          onChange={handleHeight}
          placeholder="Wzrost [cm]"
        />
        <input type="submit" className={style.btn} value="save" />
      </form>
    </div>
  )
}

export default UpdateBMI
