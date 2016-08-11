import React from 'react';
import Data from './Data';
import Table from './Table';

export default class Layout extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         focus: "thirty-days"
    //     };
    // }

    // changeFocus(focus) {
    //     this.setState({focus});
    // }

    render() {
        return (
            <div id="main">
                <h1 id="title">freeCodeCamp Leaderboard</h1>
                <Table />
                {/* <Data focus={this.state.focus} /> */}
                {/* <h2>{this.state.focus}</h2> */}
            </div>
        );
    }
}