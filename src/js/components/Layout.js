import React, { Component } from 'react';
import Axios from 'axios';

import TableHead from './TableHead';

class Table extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        };

        this.getData("all-time");
    }

    getData(focus) {
        var url = "https://fcctop100.herokuapp.com/api/fccusers/top/";
        if (focus === "thirty-days") {
            url += "recent";
        } else if (focus === "all-time") {
            url += "alltime";
        }
        Axios
            .get(url)
            .then(result => {
                this.setState({ data: result });
            });
    }

    render() {
        return (
            <div id="main">
                <h1 id="title">freeCodeCamp Leaderboard</h1>
                <table id="leaderboard">
                    <TableHead getData={this.getData.bind(this) } />

                </table>
            </div>
        );
    }
}

export default Table;

// <thead>
//     <tr>
//         <th>#</th>
//         <th>Camper Name</th>
//         <th>Points in past 30 days
//             <span className="sortButton" onClick={this.getData.bind(this, "thirty-days") }></span>
//         </th>
//         <th>All time points
//             <span className="sortButton" onClick={this.getData.bind(this, "all-time") }></span>
//         </th>
//     </tr>
// </thead>

// <tbody>
//     {this.state.data.map(function (user, idx) {
//         return (
//             <tr key={idx} className={"row" + (idx + 1) } >
//                 <td>{idx + 1}</td>
//                 <td className="camper"><img className="thumbnail" src={user.img} /> <span className="username">{user.username}</span></td>
//                 <td>{user.recent}</td>
//                 <td>{user.alltime}</td>
//             </tr>
//         );
//     }) }
// </tbody>