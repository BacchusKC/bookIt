import React from "react";
import './DisplaySaved.css'

function DisplaySaved(props) {
    return (
        <div className="bookDiv">
            <img src={props.image} />
            <h1>Title: {props.title}</h1>
            <h3>Authors: {props.authors}</h3>
            <h5>{props.text}</h5>
            {
                props.saleLink ? 
                    (<button>Test</button>) : <h1>Not For Sale</h1>
            }
            <button onClick={(event) => props.save(event)} id={props.id}>Save</button>
        </div>
    )
};

export default DisplaySaved;