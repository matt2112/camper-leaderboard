import React from 'react';
import Table from './Table';

import "../../styles/styles.scss";

export default class Layout extends React.Component {

    render() {
        return (
            <div id="main">
                <h1 id="title">freeCodeCamp Leaderboard</h1>
                <Table />
            </div>
        );
    }
}