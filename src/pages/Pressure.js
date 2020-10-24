import React from "react"
import usePressure from "../hooks/usePressure/usePressure"

const Pressure = () => {
  const { data, isError, isLoading, error } = usePressure()

  if (isError) {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>is Loading</div>
  }

  return <div>{JSON.stringify(data, null, 2)}</div>
}

export default Pressure
