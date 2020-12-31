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
                <Post body={'This is first post'} likes={'21'}/>
                <Post body={'It\'s a second post'} likes={'5'}/>
            </div>
        </div>
    )
}

export default MyPosts;