import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

    let Dialogs = [
        {id:1, name: 'Lina'},
        {id:2, name: 'Marco'},
        {id:3 ,name: 'Sasha'}
    ]

    let Messages = [
        {id:1, message: 'Hi, how are you'},
        {id:2, message: 'What are you doing?'},
        {id:3, message: 'Ciao, come stai?'}
    ]

    let dialogElements = Dialogs
        .map(d  => <Dialog id={d.id} name={d.name}/>)

    let messageElements = Messages
        .map(m => <Dialog id={m.id} message={m.message}/>)

    return (<div className={classes.dialog}>
        <div>
            {dialogElements}
        </div>
        <div>
            {messageElements}
        </div>
    </div>)
};


export default Dialogs;



// <Dialog id={Dialogs[0].id} name={Dialogs[0].name} message={Dialogs[0].message}/>,
//     <Dialog id={Dialogs[1].id} name={Dialogs[1].name} message={Dialogs[1].message} />,
//     <Dialog id={Dialogs[2].id} name={Dialogs[2].name} message={Dialogs[2].message} />