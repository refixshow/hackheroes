import React, { useContext } from "react"
import AppContext from "../context/AppContext"

const Home = () => {
  const { state } = useContext(AppContext)
  console.log(state)
  return <div>Home Page</div>
}

export default Home
