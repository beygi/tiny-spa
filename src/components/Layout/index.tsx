/**
 * @module Components/Layout
 */
import * as React from "preact";
import PublicLayout from "./containers/Public";

export interface IProps {
    /** is this a private layout? default is false  */
    private: boolean;
    /** react component which is filled the layout  */
    children?: any;
}

/**
 * basic parent layout component for public and private pages
 */
export default class Layout extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
                <PublicLayout>{this.props.children}</PublicLayout>
        );
    }
}
