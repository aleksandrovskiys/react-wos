import React from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogComponents = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageComponents = props.dialogsPage.messagesData
        .map(message => <Message text={message.text}/>);

    let messageArea = React.createRef();

    function sendMessage() {
        props.dispatch(sendMessageCreator())
    }

    function messageTextOnChange(event) {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogComponents}
            </div>
            <div className={css.messages}>
                {messageComponents}
                <div>
                    <textarea
                        placeholder='Enter your message here'
                        ref={messageArea}
                        onChange={messageTextOnChange}
                        value={props.dialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;