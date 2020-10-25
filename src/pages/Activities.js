import React from "react"
import ReactChart from "../components/organisms/ReactChart"
import ChartWrapper from "../components/atoms/chartWrapper/ChartWrapper"

const Activities = () => {
  return (
    <main>
      <ChartWrapper>
        <ReactChart queryKey="activities" endPointName="activity" />
      </ChartWrapper>
    </main>
  )
}

export default Activities
