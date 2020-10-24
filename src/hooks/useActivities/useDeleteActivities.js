import { useMutation, queryCache } from "react-query"
import axios from "axios"

export default function useDeleteAcitities() {
  return useMutation(
    (values) =>
      axios
        .delete("http://localhost:8888/.netlify/functions/activity", {
          params: values,
        })
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryCache.invalidateQueries("activities")
      },
    }
  )
}
