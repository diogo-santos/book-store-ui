import React, { Component } from 'react';

import { getBooksFromWeb, createBook } from '../services/BookService';

import Alert from './Alert';
import BookList from './BookList';
import InputSearch from './InputSearch';

class BookSearchWeb extends Component {
  constructor(props) {
    super();
    this.state = {
      books: [],
      query: '',
      alertMessage: '',
      storedBooks: []
    };

    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.handleSaveBook = this.handleSaveBook.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleOnInputKeyDown = this.handleOnInputKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleCloseAlert = () => {
    this.setState({ alertMessage: "" });
  }
  fetchBooksFromWeb(query) {
    if (query) {
      getBooksFromWeb(query)
        .then((response) => response.json())
        .then((data) => {
          const books = !data.items
            ? []
            : data.items.slice(0, 1).map(book => {
              let image = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                ? book.volumeInfo.imageLinks.thumbnail : '';
              return {
                title: book.volumeInfo.title || "",
                author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
                category: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown',
                publishedDate: book.volumeInfo.publishedDate,
                image: image.replace('http://', 'https://')
              }
            });

          this.setState({ books });
        })
        .catch((e) => {
          this.setState({
            alertMessage: 'book_search_error'
          });
        });
    }
  }
  handleSaveBook = (book, index) => {
    if (book) {
      createBook(book)
        .then((response) => {
          if (response.ok) {
            let storedBooks = this.state.storedBooks;
            storedBooks.push(index);
            this.setState({ storedBooks });
          }
        })
        .catch(() => {
          this.setState({
            alertMessage: 'book_save_error'
          });
        });
    }
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  }
  handleOnInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }
  handleSearch = () => {
    this.fetchBooksFromWeb(this.state.query);
  }
  render() {
    return (
      <div>
        <Alert
          type="warning"
          message={this.state.alertMessage}
          onClose={this.handleCloseAlert}
        />
        <InputSearch
          placeholder={'book_search_input'}
          onInputChange={this.handleOnInputChange}
          onInputKeyDown={this.handleOnInputKeyDown}
          onSearch={this.handleSearch}
        />
        <BookList
          books={this.state.books}
          onSave={this.handleSaveBook}
          storedBooks={this.state.storedBooks}
        />
      </div>
    );
  }
}

export default BookSearchWeb;