const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
            postsData: [
                {id: 0, body: "This is first post", likes: 21},
                {id: 1, body: "Another post", likes: 32},
                {id: 2, body: "God, don't forget it", likes: 64},
                {id: 3, body: "helee", likes: 1},
                {id: 4, body: "oh my", likes: 2},],
            newPostTextAreaValue: '',
        };

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                body: state.newPostTextAreaValue,
                likes: 0
            }
            state.postsData.push(newPost);
            state.newPostTextAreaValue = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostTextAreaValue = action.text;
            break;
    }

    return state;
};

export let addPostActionCreator = () => ({
    type: ADD_POST
});

export let updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});