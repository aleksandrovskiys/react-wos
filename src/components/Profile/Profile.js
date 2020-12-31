import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={css.profile}>
            <img id="profile-header-image"
                 src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Dreinschlag-drei-gleichen-2011.jpg"
                 alt="content logo"/>
            <div>
                Avatar + descr
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;