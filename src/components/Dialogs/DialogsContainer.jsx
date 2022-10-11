import React from "react";
import {reloadTextareaCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator());
    }

    let onAreaChange = (messageBody)=> {
         props.store.dispatch(reloadTextareaCreator(messageBody));
    }

    return (
        <Dialogs dialogs={state.dialogs}
                 messagesData={state.messagesData}
                 messageText={state.messageText}
                 addMessage={onSendMessageClick}
                 reloadTextarea={onAreaChange}/>
    )
};


export default DialogsContainer;



// <DialogItem id={Dialogs[0].id} name={Dialogs[0].name} message={Dialogs[0].message}/>,
//     <DialogItem id={Dialogs[1].id} name={Dialogs[1].name} message={Dialogs[1].message} />,
//     <DialogItem id={Dialogs[2].id} name={Dialogs[2].name} message={Dialogs[2].message} />