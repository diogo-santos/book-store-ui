import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import BookSearchWeb from './components/BookSearchWeb';
import BookPagination from './components/BookPagination';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title="app_name"
        />
        <BookSearchWeb />
        <BookPagination />
      </div>
    );
  }
}

export default App;