import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {MyMiddle} from './redux/middleware'
import thunk from 'redux-thunk'
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import {rootRedux} from "./redux/rootRedux";
import SagaMiddle from 'redux-saga';
import {sagaWatcher} from "./redux/sagas";

const saga = SagaMiddle();

const store = createStore(rootRedux, compose(
    applyMiddleware(
        thunk,
        MyMiddle,
        saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
