import React, { useState } from "react"
import ReactChart from "../components/organisms/ReactChart"
import ChartWrapper from "../components/atoms/chartWrapper/ChartWrapper"
import AddActivity from "../components/molecules/addActivity/AddActivity"

const Activities = () => {
  const [active, setActive] = useState({
    chart: true,
    history: false,
    add: false,
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
