const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_POST = 'ADD_POST';

const store = {
	_state: {
		profilePage: {
			personalData: {
				firstName: 'Oleksandr',
				lastName: 'Stepanenko',
				bikeName: 'Bike: GT Avalanche sport 2014',
			},
			newPostText: '',
			posts: [
				{ id: 1, message: 'Fucking post!', likeCounter: 36 },
				{ id: 2, message: 'This is my post', likeCounter: 55 },
				{ id: 3, message: 'This is my post', likeCounter: 26 },
				{ id: 4, message: 'This is my post', likeCounter: 11 },
				{ id: 5, message: 'This is my post', likeCounter: 45 },
				{ id: 1, message: 'Fucking post!', likeCounter: 36 },
				{ id: 2, message: 'This is my post', likeCounter: 55 },
				{ id: 3, message: 'This is my post', likeCounter: 26 },
				{ id: 4, message: 'This is my post', likeCounter: 11 },
				{ id: 5, message: 'This is my post', likeCounter: 45 },
			],
			friends: [
				{ id: 1, name: 'Vlad' },
				{ id: 2, name: 'Julia' },
				{ id: 1, name: 'Misha' },
			],
		},
		dialogsPage: {
			messages: [
				{ id: 1, message: 'Hello' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Thank you!' },
				{ id: 4, message: 'Nice bike!' },
				{ id: 5, message: 'Good job)' },
				{ id: 1, message: 'Hello' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Thank you!' },
				{ id: 4, message: 'Nice bike!' },
				{ id: 5, message: 'Good job)' },
			],
			newMessageText: '',
			myMessages: [],
			dialogs: [
				{ id: 1, name: 'Sasha' },
				{ id: 2, name: 'Dima' },
				{ id: 3, name: 'Oleg' },
				{ id: 4, name: 'Misha' },
				{ id: 5, name: 'Julia' },
			],
		},
	},

	get state() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	_callSubscriber() {},

	dispatch(action) {
		if (action.type === 'ADD_MESSAGE') {
			const newOutMessage = {
				id: 0,
				message: this._state.dialogsPage.newMessageText,
			};
			if (newOutMessage.message) {
				this._state.dialogsPage.myMessages.push(newOutMessage);
				this._state.dialogsPage.newMessageText = '';
				this._callSubscriber(this);
			}
		} else if (action.type === 'UPDATE_MESSAGE_TEXT') {
			this._state.dialogsPage.newMessageText = action.text;
			this._callSubscriber(this);
		} else if (action.type === 'UPDATE_POST_TEXT') {
			this._state.profilePage.newPostText = action.text;
			this._callSubscriber(this);
		} else if (action.type === 'ADD_POST') {
			const newPost = {
				id: 0,
				message: this._state.profilePage.newPostText,
				likeCounter: 0,
			};
			if (newPost.message) {
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._callSubscriber(this);
			}
		}
	},
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (newText) => ({
	type: UPDATE_POST_TEXT,
	text: newText,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (newText) => ({
	type: UPDATE_MESSAGE_TEXT,
	text: newText,
});

export default store;
