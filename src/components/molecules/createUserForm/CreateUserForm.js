import React, { memo, useState, useCallback } from "react"
import { isEqual } from "lodash"

const CreateUserForm = memo(
  ({ email, name, createUser }) => {
    const [birthDate, setBirthDate] = useState("")

    const handleSubmit = useCallback(() => {
      createUser({ email, name, birth_date: birthDate })
    }, [createUser, email, name, birthDate])

    const handleChange = useCallback((e) => {
      setBirthDate(e.target.value)
    }, [])

    return (
      <form onSubmit={handleSubmit}>
        <input type="date" onChange={handleChange} required />
        <input type="submit" value="save" />
      </form>
    )
  },
  (prevProps, nextProps) => isEqual(prevProps, nextProps)
)

export default CreateUserForm
