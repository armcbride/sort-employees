import React from "react";
import "./Search.css"

function Searchbox(props) {
    return(
        <div className="search-box">
            <form>
                <input type="search" placeholder="name" onChange={props.handleInputChange} value= {props.search} name="search"></input>
            </form>
        </div>
    )
}

export default Searchbox;