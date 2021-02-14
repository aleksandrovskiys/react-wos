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
    {id: 7, text: 'adksgjgs!'}];

let postsData = [
    {id: 0, body: "This is first post", likes: 21},
    {id: 1, body: "Another post", likes: 32},
    {id: 2, body: "God, don't forget it", likes: 64},
    {id: 3, body: "helee", likes: 1},
    {id: 4, body: "oh my", likes: 2},];

export let state = {
    dialogsData: dialogsData,
    messagesData: messagesData,
    postsData: postsData
}

export default state;