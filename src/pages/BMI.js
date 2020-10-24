import React from "react"
import ReactChart from "../components/organisms/ReactChart"

const BMI = () => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
      }}
    >
      <ReactChart queryKey="bmi" endPointName="bmi" />
    </div>
  )
}

export default BMI
