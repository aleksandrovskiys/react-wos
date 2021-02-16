import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 0, body: "This is first post", likes: 21},
                {id: 1, body: "Another post", likes: 32},
                {id: 2, body: "God, don't forget it", likes: 64},
                {id: 3, body: "helee", likes: 1},
                {id: 4, body: "oh my", likes: 2},],
            newPostTextAreaValue: '',
        },
        navbarPage: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
        this._callSubscriber(this._state)
    }
}

export default store;