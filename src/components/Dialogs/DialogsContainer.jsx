import React from "react";
import {reloadTextareaCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import Store from "../../redux/store";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

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
};


export default DialogsContainer;



// <DialogItem id={Dialogs[0].id} name={Dialogs[0].name} message={Dialogs[0].message}/>,
//     <DialogItem id={Dialogs[1].id} name={Dialogs[1].name} message={Dialogs[1].message} />,
//     <DialogItem id={Dialogs[2].id} name={Dialogs[2].name} message={Dialogs[2].message} />