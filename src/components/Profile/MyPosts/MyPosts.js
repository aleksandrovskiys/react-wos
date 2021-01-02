import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

let postsData = [
    {id: 0, body: "This is first post", likes: 21},
    {id: 1, body: "Another post", likes: 32},
    {id: 2, body: "God, don't forget it", likes: 64},
    {id: 3, body: "helee", likes: 1},
    {id: 4, body: "oh my", likes: 2},
];

const MyPosts = () => {
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
                <Post body={postsData[0].body} likes={postsData[0].likes}/>
                <Post body={postsData[1].body} likes={postsData[1].likes}/>
                <Post body={postsData[2].body} likes={postsData[2].likes}/>
                <Post body={postsData[3].body} likes={postsData[3].likes}/>
                <Post body={postsData[4].body} likes={postsData[4].likes}/>
            </div>
        </div>
    )
}

export default MyPosts;