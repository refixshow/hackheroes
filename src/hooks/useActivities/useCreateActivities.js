import { useMutation, queryCache } from "react-query"
import axios from "axios"

export default function useCreateAcitities() {
  return useMutation(
    (values) =>
      axios
        .post("http://localhost:8888/.netlify/functions/activity", values)
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryCache.invalidateQueries("activities")
      },
    }
  )
}
