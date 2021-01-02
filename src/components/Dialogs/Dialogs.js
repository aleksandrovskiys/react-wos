import React from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

let dialogsData = [{id: 1, name: 'Andrew'},
                   {id: 2, name: 'Julia'},
                   {id: 3, name: 'Alexander'},
                   {id: 4, name: 'Valera'}];

let messagesData = [
    {id: 0, text: 'This is first message!'},
    {id: 1, text: 'Hey!'},
    {id: 2, text: 'How u doin'},
    {id: 3, text: 'Yo!'},
    {id: 4, text: 'Hey!'},
    {id: 5, text: 'Nice!'},
    {id: 6, text: 'Lol!'},
    {id: 7, text: 'adksgjgs!'}
]


const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
            </div>
            <div className={css.messages}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
                <Message text={messagesData[2].text}/>
                <Message text={messagesData[3].text}/>
                <Message text={messagesData[4].text}/>
                <Message text={messagesData[5].text}/>
                <Message text={messagesData[6].text}/>
                <Message text={messagesData[7].text}/>
            </div>
        </div>
    )
}

export default Dialogs;