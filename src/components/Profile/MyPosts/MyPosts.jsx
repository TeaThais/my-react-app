import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import postItem from "./Post/PostItem/PostItem";
import {updateTextarea} from "../../../redux/state";

const MyPosts = (props) => {
    return <div>
            <Post postItems={props.postItems}
                  addPost={props.addPost}
                  updateTextarea={props.updateTextarea}
                  newPostText={props.newPostText}/>
        </div>
}

export default MyPosts;