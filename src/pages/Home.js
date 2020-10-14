import React, { useContext, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { IdentityModalContext } from "../context/IdentityModalContextProvider"
import { IdentityModal } from "react-netlify-identity-widget"

const Home = () => {
  const { isOpen, setIsOpen } = useContext(IdentityModalContext)
  const history = useHistory()

  const handleOnClick = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const handleOnCloseDialog = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const handleOnLogin = useCallback(() => {
    history.push("/activity")
  }, [])

  return (
    <div>
      Home Page
      <IdentityModal
        showDialog={isOpen}
        onCloseDialog={handleOnCloseDialog}
        onLogin={handleOnLogin}
      />
      <button onClick={handleOnClick}>Log In</button>
    </div>
  )
}

export default Home
