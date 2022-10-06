const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA'

const profileReducer = (state, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 4,
                name: 'Lana',
                message: state.newPostText,
                likes: 0,
                link: ''
            };
            state.postItems.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_TEXTAREA: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateTextareaActionCreator = (text) => ({
    type: UPDATE_TEXTAREA,
    newText: text
})

export default profileReducer;