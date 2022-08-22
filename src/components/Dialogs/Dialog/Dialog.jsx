import React from "react";
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div>
            <div className={classes.dialogItem}>
                <NavLink activeClassName={classes.active} to={path}>{props.name}</NavLink>
                <NavLink activeClassName={classes.active} to={path}>{props.message}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;


