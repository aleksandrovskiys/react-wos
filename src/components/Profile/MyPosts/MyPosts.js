import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsComponents = props.postsData
        .map(post => <Post body={post.body} likes={post.likes}/>);

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder={'Put your text here'}></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsComponents}
            </div>
        </div>
    )
}

export default MyPosts;