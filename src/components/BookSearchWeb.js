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
      alertType: 'warning'
    };

    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleOnInputKeyDown = this.handleOnInputKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSaveBook = this.handleSaveBook.bind(this);
  }
  setSuccessAlert = (message) => {
    this.setState({
      alertMessage: message,
      alertType: 'success'
    });
  }
  setWarningAlert = (message) => {
    this.setState({
      alertMessage: message,
      alertType: 'warning'
    });
  }
  handleCloseAlert = () => {
    this.setState({ alertMessage: '' });
  }
  fetchBooksFromWeb(query) {
    if (query) {
      this.handleCloseAlert();
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
                author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '',
                category: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : '',
                publishedDate: book.volumeInfo.publishedDate,
                image: image.replace('http://', 'https://')
              }
            });

          this.setState({ books });
        })
        .catch(() => {
          this.setWarningAlert('book_search_error');
        });
    }
  }
  handleSaveBook = (book) => {
    if (book) {
      this.handleCloseAlert();
      createBook(book)
        .then((response) => {
          if (response.ok) {
            this.setState({ books: [] });
            this.props.fetchBooks();
            this.setSuccessAlert('book_save_sucess');
          }
        })
        .catch(() => {
          this.setWarningAlert('book_save_error');
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
          type={this.state.alertType}
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
        />
      </div>
    );
  }
}

export default BookSearchWeb;