import * as React from "preact";
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
        return <h1 className="title"> Tiny SPA </h1>;
    }
}

export default LandingContainer;
