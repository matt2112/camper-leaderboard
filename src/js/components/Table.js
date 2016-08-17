import React from "react";
import Axios from "axios";

export default class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.getData("thirty-days");
    }

    getData(focus) {
        var url = "https://fcctop100.herokuapp.com/api/fccusers/top/";
        if (focus === "thirty-days") {
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
            <div>
                <table id="leaderboard">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camper Name</th>
                            <th>Points in past 30 days
                                <span className="sortButton" onClick={this.getData.bind(this, "thirty-days")}></span>
                            </th>
                            <th>All time points
                                <span className="sortButton" onClick={this.getData.bind(this, "all-time")}></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(function(user, idx) {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td className="camper"><img className="thumbnail" src={user.img} /> <span className="username">{user.username}</span></td>
                                    <td>{user.recent}</td>
                                    <td>{user.alltime}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
        );
    }
}