import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reloadTextareaCreator, sendMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator());
    }

    let onAreaChange = (e)=> {
        let messageBody = e.target.value;
        props.store.dispatch(reloadTextareaCreator(messageBody));
    }

    let dialogElements = state.dialogs
        .map(d  => <DialogItem id={d.id} name={d.name} pic={<img className='img' src={d.link} alt=""/>}/>)

    let messageElements = state.messagesData
        .map(m => <Message id={m.id} message={m.message}/>)

    return (<div className={classes.dialog}>
        <div>
            {dialogElements}
        </div>
        <div>
            {messageElements}
            <textarea placeholder='Enter your message'
                      onChange={onAreaChange}
                      className='textarea'
                      cols="30" rows="3"
                      value={props.messageText}/>
            <div>
                <button onClick={onSendMessageClick} className='button'>Send</button>
            </div>
        </div>

    </div>)
};


export default Dialogs;



// <DialogItem id={Dialogs[0].id} name={Dialogs[0].name} message={Dialogs[0].message}/>,
//     <DialogItem id={Dialogs[1].id} name={Dialogs[1].name} message={Dialogs[1].message} />,
//     <DialogItem id={Dialogs[2].id} name={Dialogs[2].name} message={Dialogs[2].message} />