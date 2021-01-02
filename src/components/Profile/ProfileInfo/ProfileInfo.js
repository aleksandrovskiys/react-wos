import React from "react";
import "./ProfileInfo.module.css"

export function ProfileInfo() {
    return (
        <div>
            <img id="profile-header-image"
                 src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Dreinschlag-drei-gleichen-2011.jpg"
                 alt="content logo"/>
            <div className="descriptionBlock">
                Description
            </div>
        </div>);
}