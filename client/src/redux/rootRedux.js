import {combineReducers} from "redux";
import {postsRedux} from "./postsRedux";

export const rootRedux = combineReducers({
    posts: postsRedux
});