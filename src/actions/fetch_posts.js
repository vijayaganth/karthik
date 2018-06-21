import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPost() {
	return function(dispatch) {
		fetch("https://jsonplaceholder.typicode.com/posts")
		.then(res => res.json())
		.then(posts => dispatch({
			type:FETCH_POSTS,
			payload:posts
		}))
	}  
}

export function createPost(postData) {
	return function(dispatch) {
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method:"POST",
			headers: {
				"Content-type":"application/json"
			},
			body: JSON.stringify(postData)
		})
		.then(res => res.json())
		.then(newPost=>dispatch({
			type:NEW_POST,
			payload:newPost
		}))
	}
}