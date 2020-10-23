import { useMutation, useQuery } from "react-query"
import axios from "axios"

export default function useAcitities() {
  return useMutation("activities", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  )
}
