import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={c.item}>
            {props.message}
            <div className={c.likes}>
                {props.likeCounter} 
            </div>
        </div>
    )
}

export default Post;