import React from "react";

export default class Table extends React.Component {

    changeToThirty() {
        const focus = "thirty-days";
        this.props.changeFocus(focus);
    }

    changeToAll() {
        const focus = "all-time";
        this.props.changeFocus(focus);
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
                    <tr>
                        <td>one</td>
                        <td>two</td>
                        <td>three</td>
                        <td>four</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}