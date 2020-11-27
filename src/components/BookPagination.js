import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { getBooks, deleteBook } from "../services/BookService";

import BookSearchWeb from './BookSearchWeb';
import Alert from './Alert';
import DropDown from './DropDown';
import BookList from './BookList';
import Modal from './Modal';
import BookView from './BookView';
import Pagination from 'react-js-pagination';

const SORT_OPTIONS = [
  { text: 'book_title', value: "title" },
  { text: 'book_author', value: "author" },
  { text: 'book_category', value: "category" },
  { text: 'book_published_on', value: "publishedDate" }
];

const PAGE_SIZE_OPTIONS = [
  { text: '5 per page', value: 5 },
  { text: '10 per page', value: 10 },
  { text: '50 per page', value: 50 }
];

class BookPagination extends Component {
  constructor(props) {
    super();
    this.state = {
      books: [],
      totalElements: 0,
      pageNumber: 1,
      pageSize: 5,
      sortBy: 'publishedDate',
      bookView: {},
      alertMessage: ''
    };
    this.fetchBooks = this.fetchBooks.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
    this.handleViewBook = this.handleViewBook.bind(this);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
  }
  componentDidMount() {
    this.fetchBooks();
  }
  handleCloseAlert() {
    this.setState({
      alertMessage: ''
    })
  }
  fetchBooks() {
    getBooks(this.state.pageNumber, this.state.pageSize, this.state.sortBy)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          books: data.books || [],
          totalElements: data.totalElements || 0
        })
      })
      .catch(() => {
        this.setState({
          alertMessage: 'book_search_error'
        })
      });
  }
  handleSortChange(sortBy) {
    this.setState({
      sortBy: sortBy
    }, () => {
      this.fetchBooks()
    });
  }
  handlePageChange(pageNumber) {
    this.setState({
      pageNumber: pageNumber
    }, () => {
      this.fetchBooks()
    });
  }
  handlePageSizeChange(pageSize) {
    this.setState({
      pageSize: pageSize
    }, () => {
      const lastPage = Math.ceil(this.state.totalElements / pageSize);
      if (this.state.pageNumber > lastPage) {
        this.handlePageChange(lastPage);
      } else {
        this.fetchBooks();
      }
    });
  }
  handleViewBook(id) {
    this.setState((state) => ({
      bookView: state.books.find(book => book.id === id)
    }));
  }
  handleDeleteBook(id) {
    deleteBook(id)
      .then(() => {
        if (this.state.books.length === 1) {
          this.handlePageChange(this.state.pageNumber - 1);
        } else {
          this.fetchBooks();
        }
      })
      .catch(() => {
        this.setState({
          alertMessage: 'book_delete_error'
        })
      });;
  }
  render() {
    return (
      <div>
        <BookSearchWeb
          fetchBooks={this.fetchBooks}
        />
        <div className="d-flex p-2 mb-2 bg-light mt-2">
          <span> {`Your saved books (${this.state.totalElements})`} </span>
        </div>
        <Alert
          type="warning"
          message={this.state.alertMessage}
          onClose={this.handleCloseAlert}
        />
        {this.state.books.length > 0 && (
          <PaginationBar
            handlePageSizeChange={this.handlePageSizeChange}
            pageNumber={this.state.pageNumber}
            pageSize={this.state.pageSize}
            totalElements={this.state.totalElements}
            handlePageChange={this.handlePageChange}
            handleSortChange={this.handleSortChange}
          />
        )}
        <Modal
          id="viewBookModal"
          title={this.state.bookView.title}
          body={<BookView book={this.state.bookView} />}
        />
        <BookList
          books={this.state.books}
          viewBookModalId="viewBookModal"
          onView={this.handleViewBook}
          onDelete={this.handleDeleteBook}
        />
        {this.state.books.length > 0 && (
          <PaginationBar
            handlePageSizeChange={this.handlePageSizeChange}
            pageNumber={this.state.pageNumber}
            pageSize={this.state.pageSize}
            totalElements={this.state.totalElements}
            handlePageChange={this.handlePageChange}
            handleSortChange={this.handleSortChange}
          />
        )}
      </div>
    );
  }
}

const PaginationBar = props =>
  <div className="d-flex justify-content-center mb-2">
    <DropDown
      label="Page size"
      options={PAGE_SIZE_OPTIONS}
      onChange={props.handlePageSizeChange}
      space="mr-2"
    />
    <Pagination
      activePage={props.pageNumber}
      itemsCountPerPage={props.pageSize}
      totalItemsCount={props.totalElements}
      pageRangeDisplayed={4}
      itemClass="page-item"
      linkClass="page-link"
      onChange={props.handlePageChange}
    />
    <DropDown
      label="Sort By"
      options={SORT_OPTIONS}
      onChange={props.handleSortChange}
      space="ml-2"
    />
  </div>
  ;

export default BookPagination;
