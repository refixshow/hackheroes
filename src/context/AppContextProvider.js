import React, { useReducer, useEffect } from "react"
import axios from "axios"
import AppContext, { initialstate } from "./AppContext"
import reducer from "../reducers/AppReducer"

const AppContextProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialstate)

  return (
    <AppContext.Provider value={{ state, dispach }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
