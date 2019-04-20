import React from "react";
import './DisplaySaved.css'

function DisplaySaved(props) {
    return (
        <div className="media bookDiv">
            <img className="align-self-start mr-3" src={props.image} alt={props.title} />
            <a href={props.saleLink} className="viewButton" target="_blank" rel="noopener noreferrer"><button className="button">View</button></a>
                <button id={props.id} className="deleteButton" onClick={(event) => props.handleDelete(event)}>Delete</button>
            <div className="media-body">
                <h4 className="mt-0"><strong>{props.title}</strong></h4>
                <h5>{props.authors}</h5>
                <p className="mb-0">{props.text}</p>
            </div>
        </div>
    );
};

export default DisplaySaved;