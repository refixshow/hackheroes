import React from "react"
import useEndPoint from "../hooks/useEndPoint"
import { Chart } from "react-charts"
import useTime from "../hooks/useTime"

const Activities = () => {
  const { isLoading, isError, data, error, isSuccess } = useEndPoint({
    type: "GET",
    payload: {
      queryKey: "activities",
      endPointName: "activity",
      params: { user_id: "1" },
    },
  })

  const initialData = React.useMemo(() => {
    if (isSuccess) {
      return [
        {
          label: "Length",
          data: [
            { x: "Cz. 15:21", y: data[0].length },
            { x: "Cz. 15:22", y: data[1].length },
          ],
        },
        {
          label: "Calories",
          data: [
            { x: "Cz. 15:21", y: data[0].calories },
            { x: "Cz. 15:22", y: data[1].calories },
          ],
        },
        // {
        //   label: "Series 1",
        //   data: [
        //     { x: "Cz. 15:21", y: data[0].calories },
        //     { x: "Cz. 15:22", y: data[1].calories },
        //     { x: "Cz. 15:23", y: data[2].calories },
        //     { x: "Cz. 15:24", y: data[4].calories },
        //   ],
        // },
      ]
    }
  }, [data])

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <div
        style={{
          width: "800px",
          height: "600px",
        }}
      >
        <Chart
          data={initialData}
          axes={axes}
          tooltip
          primaryCursor
          secondaryCursor
        />
      </div>
    </div>
  )
}

export default Activities
