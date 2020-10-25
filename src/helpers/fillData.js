import time from "./time"

export default function fillData({ type, data }) {
  switch (type) {
    case "activities":
      return [
        {
          label: "Length",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.length,
          })),
        },
        {
          label: "Pulse",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.pulse,
          })),
        },
        {
          label: "Time",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.time,
          })),
        },
      ]

    case "bmi":
      return [
        {
          label: "Height",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.height,
          })),
        },
        {
          label: "Weight",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.weight,
          })),
        },
        {
          label: "BMI",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.bmi,
          })),
        },
      ]

    case "pressure":
      return [
        {
          label: "Diastolic pressure",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.dias_pressure,
          })),
        },
        {
          label: "Systolic pressure",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.sys_pressure,
          })),
        },
        {
          label: "Pulse",
          data: data.map((el) => ({
            x: time({ type: "MAKE_SHORT_DATE", date: el.date }),
            y: el.pulse,
          })),
        },
      ]

    default:
      throw new Error("BAD TYPE")
  }
}
