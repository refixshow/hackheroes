import moment from "moment"
import "moment/locale/pl"

moment.locale("pl")

export default function time({ type, date }) {
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
}
