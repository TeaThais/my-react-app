import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

    return <div>
        <ProfileInfo className={classes.picture}
                     backgroundPic={props.profilePage.backgroundPic}
                     avatarPic={props.profilePage.avatarPic}/>
        <h3>Posts</h3>
        <MyPosts postItems={props.profilePage.postItems}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;
