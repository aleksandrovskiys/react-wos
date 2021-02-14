import React from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {

    let dialogComponents = props.dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageComponents = props.messagesData
        .map(message => <Message text={message.text}/>);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogComponents}
            </div>
            <div className={css.messages}>
                {messageComponents}
            </div>
        </div>
    )
}

export default Dialogs;