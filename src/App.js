import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="container">
        <Header
          title="app_name"
        />
      </div>
    );
  }
}

export default App;