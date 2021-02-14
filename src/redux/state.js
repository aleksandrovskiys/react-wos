let dialogsData = [
    {id: 1, name: 'Andrew'},
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
    {id: 7, text: 'adksgjgs!'}];

let postsData = [
    {id: 0, body: "This is first post", likes: 21},
    {id: 1, body: "Another post", likes: 32},
    {id: 2, body: "God, don't forget it", likes: 64},
    {id: 3, body: "helee", likes: 1},
    {id: 4, body: "oh my", likes: 2},];

export const postTextOnChange = (text) => {
    state.newPostTextAreaValue = text;
    renderEntireTree(state);
}

export const addPost = () => {
    let newPost = {
        id: 5,
        body: state.newPostTextAreaValue,
        likes: 0
    }
    postsData.push(newPost);
    state.newPostTextAreaValue = '';
    renderEntireTree(state);
}

export const messageTextOnChange = (text) => {
    state.newMessageText = text;
    renderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 15,
        text: state.newMessageText
    }
    messagesData.push(newMessage);
    state.newMessageText = '';
    renderEntireTree(state);
}

export const state = {
    dialogsData: dialogsData,
    messagesData: messagesData,
    postsData: postsData,
    newPostTextAreaValue: '',
    newMessageText: ''
};

export let renderEntireTree = () => {
    console.log('Rerender')
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

window.state = state;

export default state;
