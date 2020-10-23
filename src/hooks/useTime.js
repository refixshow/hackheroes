import { useMemo } from "react"
import moment from "moment"
import "moment/locale/pl"

moment.locale("pl")

const useTime = ({ type, date }) => {
  const output = useMemo(() => {
    switch (type) {
      case "GET_SHORT_DATE":
        return moment().format("dd, HH:mm")
      case "GET_LONG_DATE":
        return moment().format("DD.MM.YYYY, HH:mm")
      case "MAKE_SHORT_DATE":
        return moment(date).format("dd, HH:mm")
      case "MAKE_LONG_DATE":
        return moment(date).format("DD.MM.YYYY, HH:mm")
      case "MAKE_ISO_DATE":
        return moment(date, "DD.MM.YYYY, HH:mm").toISOString()
      default:
        throw new Error("BAD TYPE")
    }
  }, [type, date])

  return output
}

export default useTime
