import React from 'react';

const TableHead = ({getData}) => {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th>Points in past 30 days
                    <span className="sortButton" onClick={ () => getData("thirty-days") }></span>
                </th>
                <th>All time points
                    <span className="sortButton" onClick={ () => getData("all-time") }></span>
                </th>
            </tr>
        </thead>
    )
}

export default TableHead;