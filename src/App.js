import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="content">
        </div>
        <div className="footer"> 
          <Footer/>
        </div>    
      </div>
    );
  }
}

export default App;
