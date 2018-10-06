import React, { Component } from 'react';
import './App.css';
import '../PhoneInfo/PhoneInfo';
import PhoneInfo from '../PhoneInfo/PhoneInfo';
import PhoneLogo from'../../images/phone.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={PhoneLogo} alt=""/>
          Phone Info
        </header>
        <div><PhoneInfo /></div>
        <footer className="App-footer">
          Made with React.js v{React.version}
        </footer>
      </div>
    );
  }
}

export default App;
