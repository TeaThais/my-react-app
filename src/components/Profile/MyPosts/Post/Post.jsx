import React from 'react';
import classes from './Post.module.css';
import PostItem from "./PostItem/PostItem";

const Post = () => {
    let postItems = [
        {name: 'Tais', message: 'Hi', likes: 100},
        {name: 'Marco', message: 'Hello', likes: 10},
        {name: 'Sasha', message: 'Ciao', likes: 50}
    ]
    return <div>
        <textarea name="" id="" cols="30" rows="3"/>
        <div>
            <button>Send</button>
        </div>
        <PostItem name={postItems[0].name} message={postItems[0].message} likes={postItems[0].likes}/>
        <PostItem name={postItems[1].name} message={postItems[1].message} likes={postItems[1].likes}/>
        <PostItem name={postItems[2].name} message={postItems[2].message} likes={postItems[2].likes}/>
    </div>
}




export default Post;