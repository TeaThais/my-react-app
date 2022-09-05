import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
    return <div className={classes.avatar}>
        {props.pict}
    </div>
}

export default Friend;