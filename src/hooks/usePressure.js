import { useQuery } from "react-query"
import axios from "axios"

export default function usePressure() {
  return useQuery("pressure", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  )
}
