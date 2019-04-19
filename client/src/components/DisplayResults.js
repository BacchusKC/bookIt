import React from "react";
import './DisplayResults.css'

function DisplayResults(props) {
    return (
        <div className="media bookDiv">
            <img className="align-self-start mr-3" src={props.image} alt={props.title} />
            <div className="media-body">
                <h5 className="mt-0">{props.title}</h5>
                <p>{props.authors}</p>
                <p className="mb-0">{props.text}</p>
            </div>
            <a href={props.saleLink} target="_blank" rel="noopener noreferrer"><button className="button">View</button></a>
            <button className="button" onClick={(event) => props.save(event)} id={props.id}>Save</button>
        </div>
    );
};

export default DisplayResults;