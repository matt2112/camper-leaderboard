import React, { Component } from 'react';
import Request from 'react-http-request';
 
export default class App extends Component {
  render() {
    return (
      <Request
        url='https://fcctop100.herokuapp.com/api/fccusers/top/recent'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request>
    );
  }
}