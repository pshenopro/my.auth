import {create_POST, fetch_POST, true_LOADER} from "./types";

const initialState = {
    posts: [],
    fetchPosts: [],
    modal: false,
    name: '',

 };

 export const postsRedux = (state = initialState, action) => {
    switch (action.type) {
        case create_POST:
            return {...state, posts: state.posts.concat(action.payload)};
        case fetch_POST:
            return {...state, posts: action.payload};
        case true_LOADER:
            return {
                ...state,
                modal: !state.modal,
                name: action.payload
            };




        default: return state
    }

 }