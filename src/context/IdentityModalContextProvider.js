import React, { createContext, useState } from "react"

export const IdentityModalContext = createContext()

const IdentityModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <IdentityModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IdentityModalContext.Provider>
  )
}

export default IdentityModalContextProvider
