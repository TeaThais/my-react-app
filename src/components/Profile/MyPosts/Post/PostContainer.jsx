import React from 'react';
import {addPostActionCreator, updateTextareaActionCreator} from "../../../../redux/profile-reducer";
import Post from "./Post";


const PostContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = ()=> {
        props.store.dispatch(addPostActionCreator());
    }

    let onAreaChange = (text)=> {
        props.store.dispatch(updateTextareaActionCreator(text));
    }

    //console.log('props: ', props )
    return (
        <Post postItems={state.profilePage.postItems}
              newPostText={state.profilePage.newPostText}
              updateTextarea={onAreaChange}
              addPost={onAddPost}/>
    )
}
// <PostItem pic={<img className='img' src={Picture[0].link} alt=""/>} name={postItems[0].name} message={postItems[0].message} likes={postItems[0].likes}/>
// <PostItem pic={<img className='img' src={Picture[1].link} alt=""/>} name={postItems[1].name} message={postItems[1].message} likes={postItems[1].likes}/>
// <PostItem pic={<img className='img' src={Picture[2].link} alt=""/>} name={postItems[2].name} message={postItems[2].message} likes={postItems[2].likes}/>

export default PostContainer;