import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import BookPagination from './components/BookPagination';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title="app_name"
        />
        <BookPagination />
      </div>
    );
  }
}

export default App;