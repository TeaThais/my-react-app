import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div>
            <div className={classes.dialogItem}>
                <NavLink activeClassName={classes.active} to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;


