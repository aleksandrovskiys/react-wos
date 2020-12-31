import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea placeholder={'Put your text here'}></textarea>
                <button>Send</button>
                <button>Delete</button>
            </div>
            <div className={css.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;