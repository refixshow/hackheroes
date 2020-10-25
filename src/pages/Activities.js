import React, { useState } from "react"
import ReactChart from "../components/organisms/ReactChart"
import ChartWrapper from "../components/atoms/chartWrapper/ChartWrapper"
import AddActivity from "../components/molecules/addActivity/AddActivity"

const Activities = () => {
  const [active, setActive] = useState({
    chart: false,
    history: false,
    add: true,
  })

  return (
    <main>
      <ChartWrapper>
        {active.chart && (
          <ReactChart queryKey="activities" endPointName="activity" />
        )}
        {active.history && "history"}
        {active.add && <AddActivity />}
      </ChartWrapper>
    </main>
  )
}

export default Activities
