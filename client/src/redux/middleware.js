import {fetch_POST} from "./types";

export function MyMiddle({dispath}) {
    return function (next) {
        return function (action) {

            if (action.type === fetch_POST) {
                console.log('middleware for fetch post')
            }

            return next(action)
        }
    }
}