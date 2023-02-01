import React from 'react';
import logo from "../../logo.svg";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={classes.header}>
        <img src={logo} className={classes.app_logo} alt="pict"/>

        <div className={classes.loginBlock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    </header>
}

export default Header;
