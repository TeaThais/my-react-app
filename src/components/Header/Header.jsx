import React from 'react';
import logo from "../../logo.svg";
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img src={logo} className={classes.app_logo} alt="pict"/>
    </header>
}

export default Header;
