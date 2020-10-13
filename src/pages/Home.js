import React, { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../context/AppContext"

const Home = () => {
  const { state } = useContext(AppContext)
  console.log(state)

  return (
    <div>
      Home Page <Link to="/login">login</Link>
    </div>
  )
}

export default Home
