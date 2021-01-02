import React from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <DialogItem id="1" name="Andrew"/>
                <DialogItem id="2" name="Julia"/>
                <DialogItem id="3" name="Alexander"/>
                <DialogItem id="4" name="Valera"/>
            </div>
            <div className={css.messages}>
                <Message text="Hey!"/>
                <Message text="How r u doin"/>
                <Message text="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;