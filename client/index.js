import Global from "./components/global/";
import ReactDOM from "react-dom";
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

window.store = store.getState();
console.log(window.store)

ReactDOM.render((
    <Provider store={store}>
        <Global/>
    </Provider>
), document.getElementById('tetris'));
