import React from "react";
import './DisplayResults.css'

function DisplayResults(props) {
    return (
        <div className="media bookDiv">
            <img className="align-self-start mr-3" src={props.image} alt={props.title} />
            <a className="viewButton" href={props.saleLink} target="_blank" rel="noopener noreferrer"><button className="button">View</button></a>
            <button className="button saveButton" onClick={(event) => props.save(event)} id={props.id}>Save</button>
            <div className="media-body">
                <h4 className="mt-0"><strong>{props.title}</strong></h4>
                <p>{props.authors}</p>
                <p className="mb-0 description">{props.text}</p>
            </div>
        </div>
    );
};

export default DisplayResults;