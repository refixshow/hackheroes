import React, { useCallback, createContext, useState } from "react"
import { useHistory } from "react-router-dom"
import {
  IdentityModal,
  IdentityContextProvider,
} from "react-netlify-identity-widget"
import { queryCache } from "react-query"

export const IdentityModalContext = createContext()

const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL

const IdentityModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

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
    <IdentityContextProvider url={url}>
      <IdentityModalContext.Provider value={{ isOpen, setIsOpen }}>
        <IdentityModal
          showDialog={isOpen}
          onCloseDialog={handleOnCloseDialog}
          onLogin={handleOnLogin}
          onLogout={handleOnLogOut}
        />
        {children}
      </IdentityModalContext.Provider>
    </IdentityContextProvider>
  )
}

export default IdentityModalContextProvider
