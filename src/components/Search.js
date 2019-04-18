import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import API from "../utils/API";
import SearchForm from "./SearchForm";

class Search extends Component {
    state = {
        results: [],
        search: ""
    };

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data }))
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

    render() {
        console.log(this.state.results, this.state.search);
        return (
            <div>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                
            </div>
        )
    }
};

export default Search;