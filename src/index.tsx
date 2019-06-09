/**
 * @module MainEntryPoint
 */
import { createBrowserHistory } from "history";
import * as _ from "lodash";
import * as React from "preact";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./containers/app";
import "./theme/application.less";

// we need a history object to hold browsers history
const history = createBrowserHistory();

React.render(
    // <Provider store={store}>
    <BrowserRouter>
            <Switch>
                <Route path="/" component={AppContainer} />
            </Switch>
    </BrowserRouter>,
    // </Provider>,
    document.getElementById("root"),
);
