let store = {
    _state: {
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
        postsData: [
            {id: 0, body: "This is first post", likes: 21},
            {id: 1, body: "Another post", likes: 32},
            {id: 2, body: "God, don't forget it", likes: 64},
            {id: 3, body: "helee", likes: 1},
            {id: 4, body: "oh my", likes: 2},],
        newPostTextAreaValue: '',
        newMessageText: ''
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            body: this._state.newPostTextAreaValue,
            likes: 0
        }
        this._state.postsData.push(newPost);
        this._state.newPostTextAreaValue = '';
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 15,
            text: this._state.newMessageText
        }
        this._state.messagesData.push(newMessage);
        this._state.newMessageText = '';
        this._callSubscriber(this._state);
    },
    postTextOnChange(text) {
        this._state.newPostTextAreaValue = text;
        this._callSubscriber(this._state);
    },
    messageTextOnChange(text) {
        this._state.newMessageText = text;
        this._callSubscriber(this._state);
    },
}

export default store;