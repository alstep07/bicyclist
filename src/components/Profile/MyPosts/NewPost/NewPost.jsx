import React from 'react';
import c from './NewPost.module.css';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/state';

const NewPost = (props) => {
	const postElement = React.createRef();

	const addPost = () => {
		let action = addPostActionCreator();
		props.dispatch(action);
	};

	const onNewPostTextChange = () => {
		let action = updatePostTextActionCreator(postElement.current.value);
		props.dispatch(action);
	};

	return (
		<div className={c.newPost}>
			<textarea
				value={props.profilePage.newPostText}
				onChange={onNewPostTextChange}
				ref={postElement}
				className={c.text}
				name='message'
				id=''
				cols='30'
				rows='4'
				placeholder='Add new post'
			/>
			<button onClick={addPost} className={c.button}>
				Add post
			</button>
		</div>
	);
};

export default NewPost;
