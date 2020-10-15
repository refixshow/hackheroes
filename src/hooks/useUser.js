import { useQuery } from "react-query"
import axios from "axios"

export default function useUser() {
  return useQuery("user", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  )
}
