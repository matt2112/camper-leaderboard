import React from "react";

export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome",
        };
    }

    render() {
        return (
            <table id="leaderboard">
                <tr>
                    <th>#</th>
                    <th>Camper Name</th>
                    <th>Points in past 30 days</th>
                    <th>All time points</th>
                </tr>
                <tr>
                    <td>one</td>
                    <td>two</td>
                    <td>three</td>
                    <td>four</td>
                </tr>
            </table>
        );
    }
}