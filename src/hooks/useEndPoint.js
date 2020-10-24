import { useMutation, queryCache, useQuery } from "react-query"
import axios from "axios"

export default function ({ type, payload }) {
  switch (type) {
    case "GET":
      return useQuery(payload.queryKey, () =>
        axios
          .get(
            `http://localhost:8888/.netlify/functions/${payload.endPointName}`,
            {
              params: payload.params,
            }
          )
          .then((res) => res.data.response)
      )
    case "UPDATE":
      return useMutation(
        (values) =>
          axios
            .patch(
              `http://localhost:8888/.netlify/functions/${payload.endPointName}`,
              values
            )
            .then((res) => res.data),
        {
          onSettled: () => {
            queryCache.invalidateQueries(payload.queryKey)
          },
        }
      )
    case "CREATE":
      return useMutation(
        (values) =>
          axios
            .post(
              `http://localhost:8888/.netlify/functions/${payload.endPointName}`,
              values
            )
            .then((res) => res.data),
        {
          onMutate: (newValue) => {
            queryCache.cancelQueries(payload.queryKey)

            const prevState = queryCache.getQueryData(payload.queryKey)

            queryCache.setQueryData(payload.queryKey, (oldState) => [
              ...oldState,
              newValue,
            ])

            return () => queryCache.setQueryData(payload.queryKey, prevState)
          },

          onSettled: () => {
            queryCache.invalidateQueries(payload.queryKey)
          },
        }
      )
    case "DELETE":
      return useMutation(
        (values) =>
          axios
            .delete(
              `http://localhost:8888/.netlify/functions/${payload.endPointName}`,
              {
                params: values,
              }
            )
            .then((res) => res.data),
        {
          onSettled: () => {
            queryCache.invalidateQueries("activities")
          },
        }
      )
    default:
      throw new Error("Bad type!")
  }
}
