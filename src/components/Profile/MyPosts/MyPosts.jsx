import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {
	let postsElements = props.profilePage.posts.map((p) => (
		<Post message={p.message} likeCounter={p.likeCounter} />
	));

	return (
        <div className={c.content}>
            <div className={c.posts}>{postsElements}</div>
            <NewPost profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    );
};

export default MyPosts;
