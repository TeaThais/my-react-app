import React from "react";
import classes from './Message.module.css'
import {NavLink} from "react-router-dom";

const Message = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div>
            <div className={classes.messageItem}>
                <NavLink activeClassName={classes.active} to={path}>{props.message}</NavLink>
            </div>
        </div>
    )
}

export default Message;