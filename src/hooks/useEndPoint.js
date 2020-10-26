import { useMutation, queryCache, useQuery } from "react-query"
import axios from "axios"

export default function ({ type, payload }) {
  const origin = window.location.origin

  switch (type) {
    case "GET":
      return useQuery(payload.queryKey, () =>
        axios
          .get(`${origin}/.netlify/functions/${payload.endPointName}`, {
            params: payload.params,
          })
          .then((res) => res.data.response)
      )
    case "PATCH":
      return useMutation(
        (values) =>
          axios
            .patch(
              `${origin}/.netlify/functions/${payload.endPointName}`,
              values
            )
            .then((res) => res.data),
        {
          onSettled: () => {
            queryCache.invalidateQueries(payload.queryKey)
          },
        }
      )
    case "POST":
      return useMutation(
        (values) =>
          axios
            .post(
              `${origin}/.netlify/functions/${payload.endPointName}`,
              values
            )
            .then((res) => res.data),
        {
          onMutate: (newValue) => {
            queryCache.cancelQueries(payload.queryKey)

            const prevState = queryCache.getQueryData(payload.queryKey)

            queryCache.setQueryData(payload.queryKey, (oldState) => {
              if (oldState) {
                return [...oldState, newValue]
              }
              return [newValue]
            })

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
            .delete(`${origin}/.netlify/functions/${payload.endPointName}`, {
              params: values,
            })
            .then((res) => res.data),
        {
          onSettled: () => {
            queryCache.invalidateQueries(payload.queryKey)
          },
        }
      )
    default:
      throw new Error("Bad type!")
  }
}
