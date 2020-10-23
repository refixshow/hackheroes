import React from "react"
import useActivities from "../hooks/useActivities"
import { Chart } from "react-charts"
import { useTime } from "../hooks"

const Activities = () => {
  // const { data, isError, isLoading, error } = useActivities()
  // if (isError) {
  //   return <div>{error}</div>
  // }
  // if (isLoading) {
  //   return <div>is Loading</div>
  // }
  // return <div>{JSON.stringify(data, null, 2)}</div>

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          { x: "Cz. 15:21", y: 73 },
          { x: "Cz. 15:22", y: 75 },
          { x: "Cz. 15:23", y: 86 },
          { x: "Cz. 15:24", y: 95 },
          { x: "Cz. 15:25", y: 80 },
          { x: "Cz. 15:26", y: 132 },
          { x: "Cz. 15:27", y: 88 },
        ],
      },
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  )

  console.log(useTime)

  return (
    <div>
      <div
        style={{
          width: "800px",
          height: "600px",
        }}
      >
        <Chart data={data} axes={axes} tooltip primaryCursor secondaryCursor />
      </div>
    </div>
  )
}

export default Activities
