import React, { useEffect } from "react"
import axios from "axios"
import { useIdentityContext } from "react-netlify-identity-widget"

const Test = () => {
  const { user } = useIdentityContext()

  const fetchj = async () => {
    await axios.get(`${window.location.origin}/.netlify/functions/test`, {
      headers: {
        Authorization: `Bearer ${user.token.access_token}`,
      },
    })
  }

  useEffect(() => {
    fetchj().then((res) => {
      console.log(res)
    })
  }, [])

  return <button>test</button>
}

export default Test
