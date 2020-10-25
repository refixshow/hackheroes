import React from "react"
import style from "./AppTemplate.module.scss"

const AppTemplate = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

export default AppTemplate
