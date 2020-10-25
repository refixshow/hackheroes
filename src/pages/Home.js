import React, { useContext, useCallback } from "react"
import { IdentityModalContext } from "../context/IdentityModalContextProvider"
import Button from "../components/atoms/button/Button"
import style from "./Home.module.scss"
import logo from "../assets/icons/logo.svg"

const Home = () => {
  const { setIsOpen } = useContext(IdentityModalContext)

  const handleOnClick = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  return (
    <main className={style.wrapper}>
      <div className={style.content}>
        <img src={logo} className={style.logo} />
        <h1 className={style.header}>Health Companion</h1>
        <Button
          onClick={handleOnClick}
          className={style.btn}
          content="Log In"
          big
        />
      </div>
    </main>
  )
}

export default Home
