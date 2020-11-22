import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import BookSearchWeb from './components/BookSearchWeb';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title="app_name"
        />
        <BookSearchWeb />
      </div>
    );
  }
}

export default App;