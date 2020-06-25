import React from "react";

function Results(props){
    return(
        <tr>
            <td><img src={props.image} alt="thumbnail"/></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default Results;