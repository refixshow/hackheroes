import React, { useCallback } from "react"
import style from "./ActionCreator.module.scss"
import Icon from "../../atoms/icon/Icon"
import chart_icon from "../../../assets/icons/chart.svg"
import plus_icon from "../../../assets/icons/plus.svg"
import time_icon from "../../../assets/icons/time.svg"

const ActionCreator = ({ active, setActive, title }) => {
  const handleChartChange = useCallback(() => {
    setActive({
      chart: true,
      history: false,
      add: false,
      update: false,
    })
  }, [setActive])
  const handleHistoryChange = useCallback(() => {
    setActive({
      chart: false,
      history: true,
      add: false,
      update: false,
    })
  }, [setActive])
  const handleAddChange = useCallback(() => {
    setActive({
      chart: false,
      history: false,
      add: true,
      update: false,
    })
  }, [setActive])
  const handleUpdateChange = useCallback(() => {
    setActive({
      chart: false,
      history: false,
      add: false,
      update: true,
    })
  }, [setActive])

  return (
    <header className={style.wrapper}>
      <div className={style.pageTitle}>{title}</div>
      <div className={style.buttons}>
        {!active.chart && (
          <button onClick={handleChartChange} className={style.btn}>
            <Icon src={chart_icon} className={style.icon} />
          </button>
        )}
        {!active.history && (
          <button onClick={handleHistoryChange} className={style.btn}>
            <Icon src={time_icon} className={style.icon} />
          </button>
        )}
        {!active.add && (
          <button onClick={handleAddChange} className={style.btn}>
            <Icon src={plus_icon} className={style.icon} />
          </button>
        )}
      </div>
    </header>
  )
}

export default ActionCreator
