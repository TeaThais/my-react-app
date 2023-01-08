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
        <div>
            {props.profile.aboutMe}
        </div>
        <img src={props.profile.photos.small} alt=""/>
        <div>
            {props.profile.fullName}
        </div>
        <hr/>

        <div>
            <div>My Contacts</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.instagram}</div>
        </div>
        <hr/>


        {props.profile.lookingForAJob === true &&
            <div>
                <div>
                    How are you looking for a job?
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        }
    </div>
};

export default ProfileInfo;