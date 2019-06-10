import * as React from "preact";
import { Link } from "react-router-dom";

import "./style.less";

interface IProps {
}
// this.props.match.params
interface IState {
}

class LandingContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return <div className="title">
            <h1> Tiny SPA </h1>
            <Link className="button" to="/random">User page</Link>
        </div>;
    }
}

export default LandingContainer;
