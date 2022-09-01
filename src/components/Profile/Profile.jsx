import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostItem from "./MyPosts/Post/PostItem/PostItem";

const Profile = (props) => {

    return <div>
        <ProfileInfo className={classes.picture} background={props.backgroundPic} avatarPic={props.avatarPic}/>
        <h3>Posts</h3>
        <MyPosts postItems={props.postItems}/>
    </div>
}

export default Profile;
