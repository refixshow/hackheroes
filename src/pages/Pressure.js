import React from "react"
import ReactChart from "../components/organisms/ReactChart"

const Pressure = () => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
      }}
    >
      <ReactChart queryKey="pressure" endPointName="pressure" />
    </div>
  )
}

export default Pressure
