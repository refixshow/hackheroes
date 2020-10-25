import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import { Redirect } from "react-router-dom"
import useEndPoint from "../hooks/useEndPoint"
import CreateUserForm from "../components/molecules/createUserForm/CreateUserForm"

const User = () => {
  const { user } = useIdentityContext()

  const { isLoading, data, error } = useEndPoint({
    type: "GET",
    payload: {
      queryKey: "user",
      endPointName: "user",
      params: { email: user.email },
    },
  })

  const [createUser] = useEndPoint({
    type: "POST",
    payload: {
      queryKey: "user",
      endPointName: "user",
    },
  })

  if (data) {
    if (data.length > 0) {
      return <Redirect to="activities" />
    }
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <CreateUserForm
      createUser={createUser}
      email={user.email}
      name={user.user_metadata.full_name}
    />
  )
}

export default User
