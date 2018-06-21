import { combineReducers } from "redux";

import postsReducer from "./reducers/postsReducer";
import fetchComments from "./reducers/commentsReducer";


export default combineReducers({
	posts:postsReducer,
	comments:fetchComments
})