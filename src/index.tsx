/**
 * @module MainEntryPoint
 */
import { createBrowserHistory } from "history";
import * as _ from "lodash";
import * as React from "preact";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "unistore/preact";
import AppContainer from "./containers/app";
import store from "./store/unistore";

import "./theme/application.less";
require("preact/debug");

// we need a history object to hold browsers history
const history = createBrowserHistory();

React.render(
    <Provider store={store}>
        <BrowserRouter>
                <Switch>
                    <Route path="/" component={AppContainer} />
                </Switch>
        </BrowserRouter>,
    </Provider>,
    document.getElementById("root"),document.getElementById("root").firstElementChild,
);
