import React from "react";
import './DisplaySaved.css'

function DisplaySaved(props) {
    return (
        <div className="media bookDiv">
            <img className="align-self-start mr-3" src={props.image} alt={props.title} />
            <div className="media-body">
                <h3 className="mt-0">{props.title}</h3>
                <h5>{props.authors}</h5>
                <p className="mb-0">{props.text}</p>
            </div>
            <div>
                <a href={props.saleLink} target="_blank" rel="noopener noreferrer"><button className="button">View</button></a>
                <button id={props.id} className="deleteButton" onClick={(event) => props.handleDelete(event)}>Delete</button>
            </div>
        </div>
    );
};

export default DisplaySaved;