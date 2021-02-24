import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    function sendMessage() {
        props.store.dispatch(sendMessageCreator())
    }

    function messageTextOnChange(text) {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return (<Dialogs updateNewMessageText={messageTextOnChange}
                     sendMessage={sendMessage}
                     dialogsPage={state.dialogsPage}
    />)
}

export default DialogsContainer;