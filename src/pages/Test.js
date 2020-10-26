import React, { useEffect, useCallback } from "react"
import axios from "axios"
import { useIdentityContext } from "react-netlify-identity-widget"

const Test = () => {
  const { user } = useIdentityContext()

  const fetchj = useCallback(async () => {
    return await axios.get(
      `https://hackheroes.netlify.app/.netlify/functions/test`,
      {
        headers: {
          Authorization: `bearer ${user.token.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )
  }, [user.token.access_token])

  useEffect(() => {
    fetchj().then((res) => {
      console.log(res)
    })
  }, [fetchj])

  return <button>test</button>
}

export default Test
