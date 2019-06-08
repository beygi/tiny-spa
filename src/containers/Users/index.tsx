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

    public async componentDidMount() {
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

    public render() {
        if (this.state.userData === null) { return <div className="users"><div>Loading</div></div>; }
        return <div className="users">
                    <div title={`${this.state.userData.name.first} ${this.state.userData.name.last}`} >
                            <img src={this.state.userData.picture.large} alt=""/>
                    </div>
                </div> ;
    }
}

export default UserContainer;
