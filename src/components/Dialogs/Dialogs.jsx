import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";


const Dialogs = () => {

    let Dialogs = [
        {name: 'Lina', message: 'Hi, how are you'},
        {name: 'Marco', message: 'What are you doing?'},
        {name: 'Sasha', message: 'Ciao, come stai?'}
    ]



    return (
        <div>
            <Dialog  name={Dialogs[0].name} message={Dialogs[0].message}/>
            <Dialog  name={Dialogs[1].name} message={Dialogs[1].message} />
            <Dialog  name={Dialogs[2].name} message={Dialogs[2].message} />
        </div>
    )
};


export default Dialogs;