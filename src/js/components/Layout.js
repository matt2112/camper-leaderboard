import React, { Component } from 'react';
import Table from './Table';

export default class Layout extends Component {

    render() {
        return (
            <div id="main">
                <h1 id="title">freeCodeCamp Leaderboard</h1>
                <Table />
            </div>
        );
    }
}