import React from 'react';
import PostItem from "./PostItem/PostItem";
import {addPostActionCreator, updateTextareaActionCreator} from "../../../../redux/profile-reducer";



const Post = (props) => {

    let itemData = props.postItems
        .map(it => <PostItem pic={<img className='img' src={it.link} alt=""/>} key={it.id}  name={it.name} message={it.message} likes={it.likes} />)

    let newPost = React.createRef();

    let onAddPost = ()=> {
        props.addPost()
    }

    let onAreaChange = ()=> {
        let text = newPost.current.value
        props.updateTextarea(text)
    }

    //console.log('props: ', props )
    return <div>
        <textarea ref={newPost}
                  placeholder='Add your post'
                  onChange={onAreaChange}
                  cols="30" rows="3"
                  value={props.newPostText}/>
        <div>
            <button onClick={onAddPost}   className='button'>Add Post</button>
        </div>
        {itemData}
   </div>
}
// <PostItem pic={<img className='img' src={Picture[0].link} alt=""/>} name={postItems[0].name} message={postItems[0].message} likes={postItems[0].likes}/>
// <PostItem pic={<img className='img' src={Picture[1].link} alt=""/>} name={postItems[1].name} message={postItems[1].message} likes={postItems[1].likes}/>
// <PostItem pic={<img className='img' src={Picture[2].link} alt=""/>} name={postItems[2].name} message={postItems[2].message} likes={postItems[2].likes}/>




export default Post;