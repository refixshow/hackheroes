import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import { IdentityModalContext } from "../context/IdentityModalContextProvider"
import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

const Home = () => {
  const { isOpen, setIsOpen } = useContext(IdentityModalContext)
  const { isLoggedIn } = useIdentityContext()

  return (
    <div>
      Home Page
      <IdentityModal
        showDialog={isOpen}
        onCloseDialog={() => setIsOpen(false)}
      />
      <button onClick={() => setIsOpen(true)}>Log In</button>
      {isLoggedIn ? <Redirect to="/activity" /> : null}
    </div>
  )
}

export default Home
