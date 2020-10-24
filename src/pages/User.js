import React, { useEffect } from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import { Redirect } from "react-router-dom"
import useEndPoint from "../hooks/useEndPoint"

const User = () => {
  const { isLoading, isError, data, error, isSuccess } = useEndPoint({
    type: "GET",
    payload: {
      queryKey: "user",
      endPointName: "user",
      params: { user_id: "1" },
    },
  })

  const [createUser] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "user",
      endPointName: "user",
      params: { user_id: "1" },
    },
  })

  console.log(data)

  // const { user } = useIdentityContext()

  // console.log(user)

  // useEffect(() => {
  //   if (data) {
  //     if (data.length === 0) {
  //       createUser({ email: "email", name: "name" })
  //     }
  //   }
  // }, [data])

  return <div>user</div>
}

export default User
