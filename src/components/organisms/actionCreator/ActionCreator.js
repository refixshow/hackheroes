import React from "react"
import style from "./ActionCreator.module.scss"

const ActionCreator = () => {
  return (
    <header className={style.wrapper}>
      <span>title</span>
      <div>
        <div>---chart</div>
        <div>---history</div>
        <div>---add</div>
      </div>
    </header>
  )
}

export default ActionCreator
