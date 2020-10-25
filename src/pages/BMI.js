import React from "react"
import ChartWrapper from "../components/atoms/chartWrapper/ChartWrapper"
import ReactChart from "../components/organisms/ReactChart"

const BMI = () => {
  return (
    <main>
      <ChartWrapper>
        <ReactChart queryKey="bmi" endPointName="bmi" />
      </ChartWrapper>
    </main>
  )
}

export default BMI
