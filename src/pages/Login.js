import React, { useState } from "react"
import axios from "axios"

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

const Login = () => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = useState(false)

  const cb = async () => {
    const res = await axios.put(
      "/.netlify/functions/loginExample",
      null,
      identity.user && {
        headers: {
          Authorization: `Bearer ${identity.user.token.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )

    console.log(res)
  }

  return (
    <div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={() => console.log("hello")}
        onSignup={() => console.log("welcome")}
        onLogout={() => console.log("bye")}
      />
      <button onClick={() => setDialog(true)}>log in</button>
      <button onClick={cb}>try do smth</button>
      aaa
    </div>
  )
}

export default Login
