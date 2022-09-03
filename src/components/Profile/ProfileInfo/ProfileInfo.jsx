import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return <div>
        <div>
            <img className={props.className} src={props.backgroundPic} alt=''/>
        </div>
        <div>
            <img src={props.avatarPic} alt=""/>
        </div>
    </div>
};

export default ProfileInfo;