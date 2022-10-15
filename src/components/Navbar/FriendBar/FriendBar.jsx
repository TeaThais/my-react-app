import React from "react";
import Friend from "./Friend/Friend";
import classes from "./FriendBar.module.css"


const FriendBar = (props) => {
    let friendAvatar = props.navbarPic
        .map(av => <Friend  key={av.id} pict={<img className='img' src={av.link} alt=""/>} />)

    return <div className={classes.avatar}>
        {friendAvatar}
    </div>
}

export default FriendBar;