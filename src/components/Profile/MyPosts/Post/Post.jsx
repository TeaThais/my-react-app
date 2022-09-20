import React from 'react';
import PostItem from "./PostItem/PostItem";

const Post = (props) => {

    let itemData = props.postItems
        .map(it => <PostItem pic={<img className='img' src={it.link} alt=""/>}  name={it.name} message={it.message} likes={it.likes} />)

    let newPost = React.createRef();

    let addPost = ()=> {
        let post = newPost.current.value
        props.addPost(post);
        newPost.current.value = '';
    }


    return <div>
        <textarea ref={newPost} cols="30" rows="3"/>
        <div>
            <button onClick={addPost} className='button'>Add Post</button>
        </div>
        {itemData}
   </div>
}
// <PostItem pic={<img className='img' src={Picture[0].link} alt=""/>} name={postItems[0].name} message={postItems[0].message} likes={postItems[0].likes}/>
// <PostItem pic={<img className='img' src={Picture[1].link} alt=""/>} name={postItems[1].name} message={postItems[1].message} likes={postItems[1].likes}/>
// <PostItem pic={<img className='img' src={Picture[2].link} alt=""/>} name={postItems[2].name} message={postItems[2].message} likes={postItems[2].likes}/>




export default Post;