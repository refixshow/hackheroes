import React from "react"

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

const Login = () => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  return (
    <div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={() => console.log("hello ")}
        onSignup={() => console.log("welcome ")}
        onLogout={() => console.log("bye ")}
      />
      <button onClick={() => setDialog(true)}>log in</button>
    </div>
  )
}

export default Login
