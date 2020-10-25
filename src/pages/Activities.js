import React from "react"
import ReactChart from "../components/organisms/ReactChart"

const Activities = () => {
  return (
    <main
      style={{
        width: "800px",
        height: "600px",
      }}
    >
      <ReactChart queryKey="activities" endPointName="activity" />
    </main>
  )
}

export default Activities
