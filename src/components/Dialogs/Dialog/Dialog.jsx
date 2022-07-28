import React from "react";
import classes from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div>
            <div>
                {props.pic} {props.name} {props.message}
            </div>
        </div>
    )
}

export default Dialog;