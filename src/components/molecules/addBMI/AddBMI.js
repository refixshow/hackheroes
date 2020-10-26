import React, { useCallback, useState, useMemo } from "react"
import { queryCache } from "react-query"
import { Redirect } from "react-router-dom"
import { useIdentityContext } from "react-netlify-identity-widget"
import useEndPoint from "../../../hooks/useEndPoint"
import timeSetter from "../../../helpers/time"
import style from "./AddBMI.module.scss"

const AddBMI = ({ setActive }) => {
  const userData = queryCache.getQueryData("user")
  const { user } = useIdentityContext()
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const longDate = useMemo(() => timeSetter({ type: "GET_LONG_DATE" }), [])

  const [addBMI, addBMIInfo] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "bmi",
      endPointName: "bmi",
      user,
    },
  })

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      addBMI({
        user_id: userData[0]._id,
        weight,
        height,
        bmi: Math.floor(weight / Math.pow(height, 2)),
        date: timeSetter({ type: "MAKE_ISO_DATE", date: longDate }),
      })
    },
    [addBMI, longDate, weight, height, userData]
  )

  const handleWeight = useCallback((e) => {
    setWeight(e.target.value)
  }, [])
  const handleHeight = useCallback((e) => {
    setHeight(e.target.value)
  }, [])

  if (addBMIInfo.isSuccess) {
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
          onChange={handleWeight}
          placeholder="Waga [kg]"
        />
        <input
          type="number"
          required
          onChange={handleHeight}
          placeholder="Wzrost [cm]"
        />
        <input type="submit" className={style.btn} value="save" />
      </form>
    </div>
  )
}

export default AddBMI
