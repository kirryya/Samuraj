import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return <header className={s.header}>
        <img src='https://dinamo-minsk.by/assets/images/logo/logo.png'
             alt='Логотип Динамо Минск'/>
    </header>;
}

export default Header;