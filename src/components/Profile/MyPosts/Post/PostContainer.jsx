import React from 'react';
import {addPostActionCreator, updateTextareaActionCreator} from "../../../../redux/profile-reducer";
import Post from "./Post";
import {connect} from "react-redux";


/* const PostContainer = (props) => {

   // let state = props.store.getState();
    //console.log('props: ', props )
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onAddPost = ()=> {
                    store.dispatch(addPostActionCreator());
                }

                let onAreaChange = (text)=> {
                    store.dispatch(updateTextareaActionCreator(text));
                }
                return <Post postItems={state.profilePage.postItems}
                             newPostText={state.profilePage.newPostText}
                             updateTextarea={onAreaChange}
                             addPost={onAddPost}/>
            }

        }
        </StoreContext.Consumer>
    )
};
*/

const mapStateToProps = (state)=> {
    return {
        postItems: state.profilePage.postItems,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateTextarea: (text) => {
            dispatch(updateTextareaActionCreator(text))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps) (Post);

export default PostContainer;