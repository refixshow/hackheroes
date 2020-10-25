import React, { useContext, useCallback } from "react";
import { IdentityModalContext } from "../../context/IdentityModalContextProvider";
import Button from "../../components/atoms/button/Button";
import Icon from "../../components/atoms/icon/Icon";
import style from "./Home.module.scss";
import logo from "../../assets/icons/logo.svg";

const Home = () => {
  const { setIsOpen } = useContext(IdentityModalContext);

  const handleOnClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <main className={style.wrapper}>
      <div className={style.content}>
        <Icon src={logo} className={style.logo} />
        <h1 className={style.header}>Health Companion</h1>
        <Button onClick={handleOnClick} className={style.btn}>
          Log In
        </Button>
      </div>
    </main>
  );
};

export default Home;
