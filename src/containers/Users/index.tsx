import * as React from "preact";
import { connect } from "unistore/preact";
import api from "../../lib/api";
import { actions } from "../../store/unistore";

import "./style.less";
const API  = api.getInstance();

const Counter = connect("count")(
    ({ count }) => (
      <div>
        <p>Count: <b>{count}</b></p>
      </div>
    ),
  );

interface IProps {
    increase(count?: number): any;
}

interface IState {
    userData: {name: {first: string, last: string} , picture: {large: string}};
}

class UserContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {userData : null};
    }

    public async fetchData() {
        this.props.increase();
        this.setState({userData : null});
        try {
            const res = await API.getUser();
            if (res.ok) {
              const json = await res.json();
              this.setState({userData : json.results[0]});
            }
          } catch (error) {
            return { userData: null };
          }
    }

    public componentDidMount() {
        this.fetchData();
    }

    public render() {
        return <div className="users">
            <Counter />
                    <div className="user-data">
                    <a onClick={() => {this.fetchData(); }} className={"button" + (this.state.userData ? "" : " button-outline") } >
                            {this.state.userData ? "Refresh" : "Loading"}
                    </a>
                    {this.state.userData &&
                        <div>
                            <img className="user-img" src={this.state.userData.picture.large} alt=""/>
                            <div className="title">{`${this.state.userData.name.first} ${this.state.userData.name.last}`}</div>
                        </div>
                    }
                    </div>
                </div> ;
    }
}

export default connect("count", actions)(UserContainer);
