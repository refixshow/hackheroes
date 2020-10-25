import React, { useCallback } from "react"
import style from "./ActionCreator.module.scss"

const ActionCreator = ({ active, setActive }) => {
  const handleChartChange = useCallback(() => {
    setActive({ chart: true, history: false, add: false })
  }, [setActive])
  const handleHistoryChange = useCallback(() => {
    setActive({ chart: false, history: true, add: false })
  }, [setActive])
  const handleAddChange = useCallback(() => {
    setActive({ chart: false, history: false, add: true })
  }, [setActive])

  return (
    <header className={style.wrapper}>
      <span>title</span>
      <div>
        {!active.chart && <button onClick={handleChartChange}>---chart</button>}
        {!active.history && (
          <button onClick={handleHistoryChange}>---history</button>
        )}
        {!active.add && <button onClick={handleAddChange}>---add</button>}
      </div>
    </header>
  )
}

export default ActionCreator
