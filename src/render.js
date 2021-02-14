import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, postTextOnChange} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} postTextOnChange={postTextOnChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};