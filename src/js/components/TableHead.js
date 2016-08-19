import React from 'react';

const TableHead = ({getData}) => {
    console.log(getData);
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th>Points in past 30 days
                    <span className="sortButton" onClick={ () => getData("thirty-days") }></span>
                </th>
                <th>All time points
                    <span className="sortButton" onClick={ console.log("nya2") }></span>
                </th>
            </tr>
        </thead>
    )
}

export default TableHead;