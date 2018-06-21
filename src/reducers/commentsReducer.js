import { FETCH_COMMENTS } from "./../actions/types";

const intialState = {
	items:[]
}

export default function fetchComments(state = intialState, action) {
	switch(action.type) {
		case FETCH_COMMENTS: {
			return {
				...state,
				items:action.payload
			}
		}
		default:
			return state;
	}
}