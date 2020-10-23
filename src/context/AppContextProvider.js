import React, { useReducer, createContext } from "react"
import IdentityModalContext from "./IdentityModalContextProvider"
import reducer from "../reducers/AppReducer"

const initialstate = {}

export const AppContext = createContext({})

const AppContextProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialstate)
  return (
    <AppContext.Provider value={{ state, dispach }}>
      <IdentityModalContext>{children}</IdentityModalContext>
    </AppContext.Provider>
  )
}

export default AppContextProvider
