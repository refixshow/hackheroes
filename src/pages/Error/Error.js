import React from "react";
import style from "./Error.module.scss";

const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.errorBox}>
        <h1>ERROR</h1>
        <h2>Sprawdź czy używasz odpowiedniego adresu strony lub skontaktuj się z administratorem</h2>
      </div>
    </div>
  );
};

export default Error;
