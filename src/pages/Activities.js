import React from "react"
import ReactChart from "../components/organisms/ReactChart"

const Activities = () => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
      }}
    >
      <ReactChart queryKey="activities" endPointName="activity" />
    </div>
  )
}

export default Activities
