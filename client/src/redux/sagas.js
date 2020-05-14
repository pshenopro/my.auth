import {takeEvery, put, call} from 'redux-saga/effects'
import {req_POST, fetch_POST} from "./types";

export function* sagaWatcher() {
    yield takeEvery(req_POST, sagaWorker)
}

function* sagaWorker() {
    const payload = yield call(fetchPost);
    yield put({type: fetch_POST, payload});
}

async function fetchPost() {
    const response = await fetch( 'https://jsonplaceholder.typicode.com/users?_limit=3');
    return await response.json();
}

