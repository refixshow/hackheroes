import { useMutation, queryCache } from "react-query"
import axios from "axios"

export default function useUpdateAcitities() {
  return useMutation(
    (values) =>
      axios
        .patch("http://localhost:8888/.netlify/functions/activity", values)
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryCache.invalidateQueries("activities")
      },
    }
  )
}
