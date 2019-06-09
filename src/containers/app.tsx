/**
 * @module AppContainer
 */
import * as React from "preact";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router";
import Layout from "./../components/Layout";
import "./app.less";
import LandingContainer from "./Landing";
import NotFoundContainer from "./NotFound";
import UserContainer from "./Users";

interface IProps {
}

interface IState {
}

/**
 * this is our root component wich is route app to containers
 * based on browsers path
 */
class AppContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        // console.log(t.language);
        return (
                <Switch>
                    {/* Private routes */}

                    {/* <PrivateRoute path={`/dashboard`} component={DashboardContainer} /> */}
                    {/* sample page with parameters */}
                    {/* <PrivateRoute path={`/static/:name`} component={LandingContainer} /> */}

                    {/* Private admin routes */}
                    {/* <PrivateRoute path={`/admin/dashboard`} component={LandingContainer} /> */}

                    {/* Public routes */}
                    <Route exact path={`/`} render={() => <Layout private={false}><LandingContainer /></Layout>} />
                    <Route path={`/random`} render={() => <Layout private={false}><UserContainer /></Layout>} />
                    {/* not Not Founded routes */}
                    <Route component={NotFoundContainer} />
                </Switch>
        );
    }
}

export default hot(AppContainer);
