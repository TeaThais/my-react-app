import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return <div>
        <ProfileInfo className={classes.picture} backgroundPic={props.state.backgroundPic} avatarPic={props.state.avatarPic}/>
        <h3>Posts</h3>
        <MyPosts postItems={props.state.postItems}/>
    </div>
}

export default Profile;
