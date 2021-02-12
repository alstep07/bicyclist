import React from "react";
import c from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
    let postsElements = props.posts
        .map( p => <Post message={p.message} likeCounter={p.likeCounter}/>);

    return (
        <div className={c.content}>
            {postsElements}
        </div>
    )
}

export default MyPosts;
