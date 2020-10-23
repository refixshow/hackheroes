import moment from "moment"
import "moment/locale/pl"

moment.locale("pl")

const currentTime = moment().format("dd. HH:mm")

export default currentTime
