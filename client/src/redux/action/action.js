import { ADD_USER, DELETE_USER, SIGN_UP_USERS } from "./actiontype";

export const User = (data) => {
	return {
		type: ADD_USER,
		id: new Date().getTime().toString(),
		payload: {
			data: data,
		},
	};
};

//signup actions//
export const signUpUsers = (users) => {
	return {
		type: SIGN_UP_USERS,
		payload: {
			id: new Date().getTime().toString(),
			users: users,
		},
	};
};

export const deleteUser = (data) => {
	return {
		type: DELETE_USER,
		payload: {
			data: data,
		},
	};
};
