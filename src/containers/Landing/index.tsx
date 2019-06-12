import * as React from "preact";
import { Link } from "react-router-dom";
import api from "../../lib/api";

import "./style.less";
const API  = api.getInstance();

interface IProps {
}
// this.props.match.params
interface IState {
    products: any[];
    count: number;
}

class LandingContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            products : [],
            count: 0,
        };
    }

    public async componentDidMount() {
        const result = await API.getProductsByTag("Women", 1);
        if (result.ok) {
            const json = await result.json();
            this.setState({products : json.results , count: json.count});
        }
    }

    public render() {
        if (this.state.products.length === 0) {
            return <div>Loading</div>;
        }

        const products = this.state.products.slice(0, 4).map((item) => {
            return <div key={item.sid} className="column">
            <img src={item.featured_image} />
            <div className="name"></div>

            </div>;
        });

        return <div class="container products">
             <div class="row">{products}</div>
        </div>;

    }
}

export default LandingContainer;
