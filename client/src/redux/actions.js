import {create_POST, fetch_POST, true_LOADER, LOADER, req_POST} from "./types";

export function createPost(post) {
    return {
        type: create_POST,
        payload: post
    }
}

export function modalHandler(name) {
    return {
        type: true_LOADER,
        payload: name
    }
}

export function fetchPost() {
    return {
        type: req_POST
    }
}
//     return async dispatch => {
//         try {
//             const response = await fetch( 'https://jsonplaceholder.typicode.com/users?_limit=5');
//             const json = await response.json();
//
//             dispatch({type: fetch_POST, payload: json})
//         } catch (e) {
//             window.M.toast({ html: 'Что то пошло не так'})
//         }
//     }
// }