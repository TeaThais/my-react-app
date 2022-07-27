import React from 'react';
import classes from './Post.module.css';
import PostItem from "./PostItem/PostItem";

const Post = () => {
    return <div>
        <textarea name="" id="" cols="30" rows="10"/>
        <div>
            <button>Send</button>
        </div>
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
}
export default Post;