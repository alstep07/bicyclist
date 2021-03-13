import React from 'react';
import c from './NewPost.module.css';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/state';

const NewPost = (props) => {
	const addPost = () => {
		let action = addPostActionCreator();
		props.dispatch(action);
	};

	const onNewPostTextChange = ({target}) => {
		let action = updatePostTextActionCreator(target.value);
		props.dispatch(action);
	};

	return (
		<div className={c.newPost}>
			<textarea
				value={props.profilePage.newPostText}
				onChange={onNewPostTextChange}
				className={c.text}
				name='message'
				placeholder='Add new post'
			/>
			<button onClick={addPost} className={c.button}>
				Add post
			</button>
		</div>
	);
};

export default NewPost;
