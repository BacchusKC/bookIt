import React, { Component } from 'react';
import DisplaySaved from "./DisplaySaved";
import axios from 'axios';

class Saved extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        axios.get("/api/books/").then(result => {
            this.setState({results: result.data})
        });
    };

    handleDelete = event => {
        axios.delete("/api/books/" + event.target.id).then(result => {
            axios.get("/api/books/").then(result => {
                this.setState({results: result.data});
            });
        });
    };
    
    render() {
        return (
            <div>
                {   
                    this.state.results.map((book, index) => {
                        return (
                        <DisplaySaved
                            key={book._id}
                            id={book._id}
                            indexOfResult={index}
                            title={book.title}
                            authors={book.authors}
                            image={book.image}
                            text={book.description}
                            saleLink={book.saleLink}
                            handleDelete={this.handleDelete}
                        />
                        );
                    })
                }
            </div>
        );
    };
};

export default Saved;