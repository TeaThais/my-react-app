import React from 'react';
import PostContainer from "./Post/PostContainer";


const MyPosts = (props) => {
    return <div>
            <PostContainer store={props.store}/>
        </div>
}

export default MyPosts;