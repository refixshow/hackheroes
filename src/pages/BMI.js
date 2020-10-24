import React from "react"
import useBMI from "../hooks/useBMI/useBMI"

const BMI = () => {
  const { data, isError, isLoading, error } = useBMI()

  if (isError) {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>is Loading</div>
  }

  return <div>{JSON.stringify(data, null, 2)}</div>
}

export default BMI
