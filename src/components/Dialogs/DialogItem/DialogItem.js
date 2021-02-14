import css from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {
    return (
        <div className={css.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>);
}
