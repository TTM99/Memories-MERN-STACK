import { combineReducers } from "redux";
import posts from "./posts";
import post from "./post";

export default combineReducers({
  posts: posts,
  post: post,
});
