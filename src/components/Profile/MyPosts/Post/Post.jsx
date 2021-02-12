import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
    let likesElement = React.createRef();

    let addLike = () => {
        
    }

    return (
        <div className={c.item}>
            {props.message}
            <button onClick={addLike} ref={likesElement} className={c.likes}>
                {props.likeCounter}
            </button>
        </div>
    )
}

export default Post;
