/**
 * @module Components/Layout/PublicLayout
 */
import * as React from "preact";

interface IProp {
    /** react element which is filled the layout */
    children?: JSX.Element;
}

/**
 * public layout to represent public pages that don't need a loggined user
 */
export default class PublicLayout extends React.Component {
    public render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
