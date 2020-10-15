import React, { useContext, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { IdentityModalContext } from "../context/IdentityModalContextProvider"
import { IdentityModal } from "react-netlify-identity-widget"
import { queryCache } from "react-query"

const IdentityModalComponent = () => {
  const { isOpen, setIsOpen } = useContext(IdentityModalContext)
  const history = useHistory()

  const handleOnLogOut = useCallback(() => {
    queryCache.clear()
  }, [])

  const handleOnCloseDialog = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const handleOnLogin = useCallback(() => {
    history.push("/activity")
  }, [history])

  return (
    <IdentityModal
      showDialog={isOpen}
      onCloseDialog={handleOnCloseDialog}
      onLogin={handleOnLogin}
      onLogout={handleOnLogOut}
    />
  )
}

export default IdentityModalComponent
