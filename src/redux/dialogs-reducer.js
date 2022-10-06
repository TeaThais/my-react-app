const SEND_MESSAGE = 'SEND-MESSAGE'
const RELOAD_TEXTAREA = 'RELOAD-TEXTAREA'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newDialog = {
                id: 4,
                name: 'Lana',
                link: ''
            }

            let newMessage = {
                id: 4,
                message: state.messageText,
            };
            state.dialogs.push(newDialog);
            state.messagesData.push(newMessage)
            state.messageText = '';
            return state;
        }

        case RELOAD_TEXTAREA: {
            state.messageText = action.newMessage;
            return state;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const reloadTextareaCreator = (messageBody) => ({
    type: RELOAD_TEXTAREA,
    newMessage: messageBody
})


export default dialogsReducer;