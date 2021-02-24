import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = (text) => {
        props.store.dispatch(addPostActionCreator());
    }

    function postTextOnChange(text) {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<MyPosts updateNewPostText={postTextOnChange}
                     addPost={addPost}
                     postsData={state.profilePage.postsData}
                     newPostTextAreaValue={state.profilePage.newPostTextAreaValue}

    />)
}

export default MyPostsContainer;