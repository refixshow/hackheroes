import React from "react"
import useActivities from "../hooks/useActivities"

const Activities = () => {
  const { data, isError, isLoading, error } = useActivities()

  if (isError) {
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>is Loading</div>
  }

  return <div>{JSON.stringify(data, null, 2)}</div>
}

export default Activities
