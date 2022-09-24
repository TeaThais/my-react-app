import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateTextarea} from "../../redux/state";


const Profile = (props) => {

    return <div>
        <ProfileInfo className={classes.picture} backgroundPic={props.profilePage.backgroundPic} avatarPic={props.profilePage.avatarPic}/>
        <h3>Posts</h3>
        <MyPosts postItems={props.profilePage.postItems}
                 addPost={props.addPost}
                 updateTextarea={props.updateTextarea}/>
    </div>
}

export default Profile;
