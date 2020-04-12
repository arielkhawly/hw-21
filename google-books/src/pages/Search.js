import React, { Component, Fragment } from "react"
import Book from "../components/Book";
import API from "../utils/API";
import Form from "../components/Form";
import List from "../components/List"

class Search extends Component {
    state = {
        books: [],
        q: "",
        message: "Search for a book"

    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No Book found, try again"
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    render() {
        return (
         
                <Form>
                    handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}

            this.state.books.length ? (
                <List>
                        {this.state.books.map(book => (
                            <Book>
                                key={book.id}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                                    <button
                                        onClick={() => this.handleBookSave(book.id)}
                                        className="btn btn-primary"
                                    >
                                        save
                                    </button>
                                )}
                            </Book>
                        ))}
                    </List>
            )
                <h2>{this.state.message}</h2>
                </Form>
        )
    }

    export default Search;