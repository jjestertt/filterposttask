import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return (
        <li className={style.postsItem}>
            <h3 className={style.postsItemTitle}>{props.title}</h3>
            <p className={style.postsItemText}>{props.text}</p>
            <span className={style.postsItemAuthor}>{props.userName}</span>
        </li>
    )
}

export default Post;