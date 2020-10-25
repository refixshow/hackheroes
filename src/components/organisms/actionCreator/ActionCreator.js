import React from "react"
import style from "./ActionCreator.module.scss"

import { queryCache } from "react-query"

const ActionCreator = ({ type, payload }) => {
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
