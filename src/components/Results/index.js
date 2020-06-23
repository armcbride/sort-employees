import React from "react";

function Results(props){
    return(
        <tr>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default Results;