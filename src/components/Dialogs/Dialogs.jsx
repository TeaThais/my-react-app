import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let showMessage = ()=> {
        alert(newMessage.current.value);
    }

    let dialogElements = props.state.dialogs
        .map(d  => <DialogItem id={d.id} name={d.name} pic={<img className='img' src={d.link} alt=""/>}/>)

    let messageElements = props.state.messagesData
        .map(m => <Message id={m.id} message={m.message}/>)

    return (<div className={classes.dialog}>
        <div>
            {dialogElements}
        </div>
        <div>
            {messageElements}
            <textarea ref={newMessage} className='textarea' cols="30" rows="3"></textarea>
            <div>
                <button onClick={showMessage} className='button'>Send</button>
            </div>

        </div>
    </div>)
};


export default Dialogs;



// <DialogItem id={Dialogs[0].id} name={Dialogs[0].name} message={Dialogs[0].message}/>,
//     <DialogItem id={Dialogs[1].id} name={Dialogs[1].name} message={Dialogs[1].message} />,
//     <DialogItem id={Dialogs[2].id} name={Dialogs[2].name} message={Dialogs[2].message} />