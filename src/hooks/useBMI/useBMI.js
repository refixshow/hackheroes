import { useQuery } from "react-query"
import axios from "axios"

export default function useBMI() {
  return useQuery("bmi", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  )
}
