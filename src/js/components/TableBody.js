import React from 'react';

const TableBody = ({data}) => {
    return (
        <tbody>
            {data.map(function (user, idx) {
                return (
                    <tr key={idx} className={"row" + (idx + 1) } >
                        <td>{idx + 1}</td>
                        <td className="camper">
                            <img className="thumbnail" src={user.img} />
                            <span className="username">{user.username}</span>
                        </td>
                        <td>{user.recent}</td>
                        <td>{user.alltime}</td>
                    </tr>
                );
            }) }
        </tbody>
    )
}

export default TableBody;