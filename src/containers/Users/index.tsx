import * as React from "preact";
import api from "../../lib/api";
import "./style.less";
const API  = api.getInstance();

interface IProps {
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
        if (this.state.userData === null) { return <div className="title"><div>Loading</div></div>; }
        return <div className="users">
                    <div>
                            <img onClick={() => {this.fetchData(); }} src={this.state.userData.picture.large} alt=""/>
                            <div className="title">{`${this.state.userData.name.first} ${this.state.userData.name.last}`}</div>
                    </div>
                </div> ;
    }
}

export default UserContainer;
