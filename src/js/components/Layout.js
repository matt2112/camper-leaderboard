import React, { Component } from 'react';
import Axios from 'axios';

import TableBody from './TableBody';
import TableHead from './TableHead';

class Table extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        };

        this.getData("thirty-days");
    }

    getData(focus) {
        var url = "https://fcctop100.herokuapp.com/api/fccusers/top/";
        if (focus === "thirty-days") {
            url += "recent";
        } else if (focus === "all-time") {
            url += "alltime";
        } else {
            return console.error("Error, focus option not available");
        }
        Axios
            .get(url)
            .then(result => {
                this.setState({ data: result.data });
            });
    }

    render() {
        return (
            <div className="main">
                <h1 className="title">freeCodeCamp Leaderboard</h1>
                <table className="leaderboard">
                    <TableHead getData={this.getData.bind(this)} />
                    <TableBody data={this.state.data} />
                </table>
            </div>
        );
    }
}

export default Table;