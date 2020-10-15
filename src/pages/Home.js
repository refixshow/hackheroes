import React, { useContext, useCallback } from "react"
import { IdentityModalContext } from "../components/IdentityModalComponent"

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
