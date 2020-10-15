import React, { useContext, useCallback, createContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { IdentityModal } from "react-netlify-identity-widget"
import { queryCache } from "react-query"

export const IdentityModalContext = createContext()

export const IdentityModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <IdentityModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IdentityModalContext.Provider>
  )
}

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
