import React, { useContext, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { IdentityModalContext } from "../context/IdentityModalContextProvider"
import { IdentityModal } from "react-netlify-identity-widget"

const Home = () => {
  const { setIsOpen } = useContext(IdentityModalContext)

  const handleOnClick = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  return (
    <div>
      Home Page
      <button onClick={handleOnClick}>Log In</button>
    </div>
  )
}

export default Home
