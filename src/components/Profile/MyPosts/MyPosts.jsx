import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    return <div>
            <Post postItems={props.postItems}
                  newPostText={props.newPostText}
                  dispatch={props.dispatch}/>
        </div>
}

export default MyPosts;