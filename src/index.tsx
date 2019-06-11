/**
 * @module MainEntryPoint
 */
import {createBrowserHistory} from "history";
import * as React from "preact";
import {Router} from "react-router";
import {Provider} from "unistore/preact";
import AppContainer from "./containers/app";
import store from "./store/unistore";

import "./theme/application.less";

require("preact/debug");

// we need a history object to hold browsers history
const history = createBrowserHistory();

React.render(
    <Provider store={store}>
        <Router history={history}>
            <AppContainer/>
        </Router>,
    </Provider>,
    document.getElementById("root"), document.getElementById("root").firstElementChild,
);
