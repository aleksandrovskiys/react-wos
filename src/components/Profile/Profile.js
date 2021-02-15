import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     newPostTextAreaValue={props.newPostTextAreaValue}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;