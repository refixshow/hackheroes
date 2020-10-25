import React, { memo, useState, useCallback } from "react";
import { isEqual } from "lodash";
import style from "./CreateUserForm.module.scss";

const CreateUserForm = memo(
  ({ email, name, createUser }) => {
    const [birthDate, setBirthDate] = useState("");

    const handleSubmit = useCallback(() => {
      createUser({ email, name, birth_date: birthDate });
    }, [createUser, email, name, birthDate]);

    const handleChange = useCallback((e) => {
      setBirthDate(e.target.value);
    }, []);

    return (
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <input type='date' onChange={handleChange} required />
          <input type='submit' className={style.btn} value='save' />
        </form>
      </div>
    );
  },
  (prevProps, nextProps) => isEqual(prevProps, nextProps)
);

export default CreateUserForm;
