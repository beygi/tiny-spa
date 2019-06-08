/**
 * @module MainEntryPoint
 */
import * as _ from "lodash";
import * as React from "preact";
import Router from "preact-router";
import Landing from "./containers/Landing";
import Random from "./containers/Users";
import "./theme/application.less";

import { VERSION } from "./constants";

// we need a history object to hold browsers history
// const history = createBrowserHistory();

console.log("version: " + VERSION);
React.render(
        <Router>
            <Landing path="/" />
            <Random path="/random" />
        </Router>,
    document.getElementById("root"),
);
