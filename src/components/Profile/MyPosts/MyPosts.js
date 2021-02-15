import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsComponents = props.postsData
        .map(post => <Post body={post.body} likes={post.likes}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "ADD-POST"});
    }

    function postTextOnChange() {
        let text = newPostElement.current.value;
        props.dispatch({type:"UPDATE-NEW-POST-TEXT",
            text: text})
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Put your text here'
                              ref={newPostElement}
                              onChange={postTextOnChange}
                              value={props.newPostTextAreaValue}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsComponents}
            </div>
        </div>
    )
}

export default MyPosts;