import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>
            <div>
                <img className={props.className} src={props.backgroundPic} alt=''/>
            </div>
            <div>
                <img src={props.avatarPic} alt=""/>

            </div>
        </div>
    }

    return <div>
        <img src={props.profile.photos.large} alt=""/>
    </div>
};

export default ProfileInfo;