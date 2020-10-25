import React from "react"
import style from "./ChartWrapper.module.scss"

const ChartWrapper = ({ children }) => {
  return <div className={style.chartWrapper}>{children}</div>
}

export default ChartWrapper
