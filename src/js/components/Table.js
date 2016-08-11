import React from "react";
import Axios from "axios";

export default class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            focus: "thirty-days",
            data: []
        };
    }

    changeToThirty() {
        this.state.focus = "thirty-days";
        this.getData();
    }

    changeToAll() {
        this.state.focus = "all-time";
        this.getData();
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        var url = "https://fcctop100.herokuapp.com/api/fccusers/top/";
        if (this.state.focus === "thirty-days") {
            url += "recent";
        } else {
            url += "alltime";
        }
        Axios
            .get(url)
            .then(result => {
                this.setState({data: result.data});
            });
    }

    render() {
        return (
            <table id="leaderboard">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th onClick={this.changeToThirty.bind(this)}>Points in past 30 days</th>
                        <th onClick={this.changeToAll.bind(this)}>All time points</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(function(user, idx) {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.recent}</td>
                                <td>{user.alltime}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}