import React from "react";

export default class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            focus: "thirty-days",
            data: {}
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

    getData() {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://fcctop100.herokuapp.com/api/fccusers/top/";
        if (this.state.focus === "thirty-days") {
            url += "recent";
        } else {
            url += "alltime";
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var data = JSON.parse(xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
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
                        <td></td>
                        <td>two</td>
                        <td>three</td>
                        <td>four</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}