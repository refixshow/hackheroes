import React from "react"

import ReactChart from "../components/organisms/ReactChart"
import ChartWrapper from "../components/atoms/chartWrapper/ChartWrapper"

const Pressure = () => {
  return (
    <main>
      <ChartWrapper>
        <ReactChart queryKey="pressure" endPointName="pressure" />
      </ChartWrapper>
    </main>
  )
}

export default Pressure
