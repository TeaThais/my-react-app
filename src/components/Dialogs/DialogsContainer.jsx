import React from "react";
import {reloadTextareaCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*const DialogsContainer = (props) => {

    // let state = props.store.getState().dialogsPage;

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onSendMessageClick = ()=> {
                    store.dispatch(sendMessageCreator());
                }

                let onAreaChange = (messageBody)=> {
                    store.dispatch(reloadTextareaCreator(messageBody));
                }

            return <Dialogs dialogs={state.dialogsPage.dialogs}
                 messagesData={state.dialogsPage.messagesData}
                 messageText={state.dialogsPage.messageText}
                 addMessage={onSendMessageClick}
                 reloadTextarea={onAreaChange}/>}
        }
        </StoreContext.Consumer>
    )
};*/

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messagesData,
        messageText: state.dialogsPage.messageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageCreator());
        },
        reloadTextarea: (messageBody) => {
            dispatch(reloadTextareaCreator(messageBody));
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;



