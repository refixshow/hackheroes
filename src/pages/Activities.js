import React from "react"
import useGetActivities from "../hooks/useActivities/useGetActivities"
import useCreateActivities from "../hooks/useActivities/useCreateActivities"
import useUpdateActivities from "../hooks/useActivities/useUpdateActivities"
import useDeleteActivities from "../hooks/useActivities/useDeleteActivities"
import { Chart } from "react-charts"
import useTime from "../hooks/useTime"

const Activities = () => {
  // const { isLoading, isError, data, error } = useGetActivities()

  const [createActivities, createActivitiesInfo] = useCreateActivities()
  const [updateActivities, updateActivitiesInfo] = useUpdateActivities()
  const [deleteActivities, deleteActivitiesInfo] = useDeleteActivities()

  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>
  // }

  // const data = React.useMemo(
  //   () => [
  //     {
  //       label: "Series 1",
  //       data: [
  //         { x: "Cz. 15:21", y: 73 },
  //         { x: "Cz. 15:22", y: 75 },
  //         { x: "Cz. 15:23", y: 86 },
  //         { x: "Cz. 15:24", y: 95 },
  //         { x: "Cz. 15:25", y: 80 },
  //         { x: "Cz. 15:26", y: 132 },
  //         { x: "Cz. 15:27", y: 88 },
  //         { x: "Cz. 15:27", y: 98 },
  //         { x: "Cz. 15:27", y: 88 },
  //         { x: "Cz. 15:31", y: 100 },
  //       ],
  //     },
  //   ],
  //   []
  // )

  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: "ordinal", position: "bottom" },
  //     { type: "linear", position: "left" },
  //   ],
  //   []
  // )

  return (
    <div>
      <div
        style={{
          width: "800px",
          height: "600px",
        }}
      >
        {/* <Chart data={data} axes={axes} tooltip primaryCursor secondaryCursor /> */}
        <button
          onClick={() =>
            createActivities({
              user_id: "1",
              type: "typsde",
              length: 122354,
              calories: 125234,
              date: "2015-04-21T18:25:43-05:00",
            })
          }
        >
          add Activity
        </button>
        <button
          onClick={() =>
            updateActivities({
              object_id: "5f931020bdb0a527240a8539",
              user_id: "1",
              type: "AAAAAAAAAAAAAAAAAAA",
              length: 123333333333333333,
              calories: 123333333333,
              date: "2012-04-21T23:25:43.000Z",
            })
          }
        >
          udpate Activity
        </button>
        <button
          onClick={() =>
            deleteActivities({ object_id: "5f931020bdb0a527240a8539" })
          }
        >
          delete Activity
        </button>

        {/* {JSON.stringify(data)} */}
      </div>
    </div>
  )
}

export default Activities
