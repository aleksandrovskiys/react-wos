const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {
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