import React from "react"
import style from "./CardTemplate.module.scss"

const Card = ({ children }) => {
  return <div className={style.test}>{children}</div>
}

export default Card
