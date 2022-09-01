import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import postItem from "./Post/PostItem/PostItem";

const MyPosts = (props) => {
    return <div>
            <Post postItems={props.postItems}/>
        </div>
}

export default MyPosts;