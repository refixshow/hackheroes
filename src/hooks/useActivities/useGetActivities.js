import { useQuery } from "react-query"
import axios from "axios"

export default function useAcitities() {
  return useQuery("activities", () =>
    axios
      .get("http://localhost:8888/.netlify/functions/activity", {
        params: { user_id: "1" },
      })
      .then((res) => res.data)
  )
}
