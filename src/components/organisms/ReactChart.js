import React from "react"
import { Chart } from "react-charts"
import { queryCache } from "react-query"
import { useIdentityContext } from "react-netlify-identity-widget"
import useEndPoint from "../../hooks/useEndPoint"
import fillData from "../../helpers/fillData"

const ReactChart = ({ queryKey, endPointName }) => {
  const identity = useIdentityContext()
  const user = queryCache.getQueryData("user")

  const { isLoading, isError, data, error, isSuccess } = useEndPoint({
    type: "GET",
    payload: {
      queryKey,
      endPointName,
      params: { user_id: user[0].email },
      user: identity.user,
    },
  })

  const initialData = React.useMemo(() => {
    if (isSuccess) {
      return fillData({ type: queryKey, data })
    }
  }, [data, isSuccess, queryKey])

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
    <Chart
      data={initialData}
      axes={axes}
      tooltip
      primaryCursor
      secondaryCursor
    />
  )
}

export default ReactChart
