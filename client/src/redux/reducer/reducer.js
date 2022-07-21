import { ADD_USER } from "../action/actiontype";
import { DELETE_USER } from "../action/actiontype";

const initialState = {
	user: [],
};

export const reducer = (state = initialState, action) => {
	switch (action?.type) {
		case ADD_USER:
			const { data } = action.payload.data;
			return {
				...state,
				data: {
					// id: id,
					user: data,
				},
				// authenticated: true,
			};
		case DELETE_USER:
			const { del } = action.payload.data;
			return {
				state,
				data: {
					del: [],
				},
			};

		default:
			return { state };
	}
};
