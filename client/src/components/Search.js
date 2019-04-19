import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import API from "../utils/API";
import SearchForm from "./SearchForm";
import DisplayResults from "./DisplayResults";
import axios from 'axios';

class Search extends Component {
    state = {
        results: [],
        search: ""
    };

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    saveBook = event => {
        const resultToSave = this.state.results.find((result) => result.id === event.target.id);
        const bookToSave = {
            title: resultToSave.volumeInfo.title,
            authors: resultToSave.volumeInfo.authors.join(", "),
            description: resultToSave.volumeInfo.description,
            image: resultToSave.volumeInfo.imageLinks.thumbnail,
            saleLink: resultToSave.saleInfo.buyLink,
            id: resultToSave.id
        }
        console.log(resultToSave)
        axios.post("/saveBook", bookToSave).then((result) => {
            console.log(result)
        })
    };

    render() {
        const res = this.state.results;
        console.log(res);
        return (
            <div>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {   
                    res.map((book, index) => {
                        return (
                        <DisplayResults
                            key={book.id}
                            id={book.id}
                            indexOfResult={index}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors.join(", ")}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            text={book.volumeInfo.description}
                            saleLink={book.saleInfo.buyLink}
                            save={this.saveBook}
                        />
                        );
                    })
                }
            </div>
        )
    }
};

export default Search;