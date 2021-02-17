const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
            dialogsData: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Julia'},
                {id: 3, name: 'Alexander'},
                {id: 4, name: 'Valera'}],
            messagesData: [
                {id: 0, text: 'This is first message!'},
                {id: 1, text: 'Hey!'},
                {id: 2, text: 'How u doin'},
                {id: 3, text: 'Yo!'},
                {id: 4, text: 'Hey!'},
                {id: 5, text: 'Nice!'},
                {id: 6, text: 'Lol!'},
                {id: 7, text: 'adksgjgs!'}],
            newMessageText: ''
        };

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 15,
                text: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            break;
    }

    return state;
};

export let sendMessageCreator = () => ({
    type: SEND_MESSAGE
});

export let updateNewMessageTextCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});