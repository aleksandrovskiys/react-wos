import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, messageTextOnChange, postTextOnChange, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                 state={state}
                 addPost={addPost}
                 postTextOnChange={postTextOnChange}
                 addMessage={addMessage}
                 messageTextOnChange={messageTextOnChange}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(state);

subscribe(renderEntireTree);

reportWebVitals();
