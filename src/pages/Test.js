import React, { useEffect, useCallback } from "react"
import axios from "axios"
import { useIdentityContext } from "react-netlify-identity-widget"

const Test = () => {
  const { user } = useIdentityContext()

  const fetchj = useCallback(async () => {
    return await axios.get(
      `${window.location.origin}/.netlify/functions/test`,
      {
        headers: {
          Authorization: `Bearer ${user.token.access_token}`,
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
