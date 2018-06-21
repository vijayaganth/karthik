import { FETCH_COMMENTS } from "./types";

export function fetchComments() {
	return function(dispatch) {
		fetch('https://jsonplaceholder.typicode.com/comments/')
		.then(res => res.json())
		.then(data => dispatch({
			type:FETCH_COMMENTS,
			payload: data
		}))
	}
}