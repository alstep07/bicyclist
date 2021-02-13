const state = {
	profilePage: {
		personalData: {
			firstName: "Oleksandr",
			lastName: "Stepanenko",
			bikeName: "Bike: GT Avalanche sport 2014",
		},
		posts: [
			{ id: 1, message: "Fucking post!", likeCounter: 36 },
			{ id: 2, message: "This is my post", likeCounter: 55 },
			{ id: 3, message: "This is my post", likeCounter: 26 },
			{ id: 4, message: "This is my post", likeCounter: 11 },
			{ id: 5, message: "This is my post", likeCounter: 45 },
			{ id: 1, message: "Fucking post!", likeCounter: 36 },
			{ id: 2, message: "This is my post", likeCounter: 55 },
			{ id: 3, message: "This is my post", likeCounter: 26 },
			{ id: 4, message: "This is my post", likeCounter: 11 },
			{ id: 5, message: "This is my post", likeCounter: 45 },
		],
		friends: [
			{ id: 1, name: "Vlad" },
			{ id: 2, name: "Julia" },
			{ id: 1, name: "Misha" },
		],
	},
	dialogsPage: {
		messages: [
			{ id: 1, message: "Hello" },
			{ id: 2, message: "How are you?" },
			{ id: 3, message: "Thank you!" },
			{ id: 4, message: "Nice bike!" },
			{ id: 5, message: "Good job)" },
			{ id: 1, message: "Hello" },
			{ id: 2, message: "How are you?" },
			{ id: 3, message: "Thank you!" },
			{ id: 4, message: "Nice bike!" },
			{ id: 5, message: "Good job)" },
		],
		newMessageText: "",
		myMessages: [],
		dialogs: [
			{ id: 1, name: "Sasha" },
			{ id: 2, name: "Dima" },
			{ id: 3, name: "Oleg" },
			{ id: 4, name: "Misha" },
			{ id: 5, name: "Julia" },
		],
	},
};

let renderEntireTree = () => {};

export const addMessage = () => {
	const newOutMessage = {
		id: 0,
		message: state.dialogsPage.newMessageText,
	};
	state.dialogsPage.myMessages.push(newOutMessage);
	state.dialogsPage.newMessageText = "";
	renderEntireTree(state);
};

export const updateMessageText = (text) => {
	state.dialogsPage.newMessageText = text;
	renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;
