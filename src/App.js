import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/BookList'
import BookDetail from './containers/BookDetail';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Practice</h1>
        </header>
        <p className="App-intro">
          <BookList />
          <BookDetail />
        </p>
      </div>
    );
  }
}

export default App;
