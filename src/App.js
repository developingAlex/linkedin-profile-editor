import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    user: {
      firstName: 'Alex',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/lego/2.jpg'
    }
  }

  render() {

    

    return (
      <div className="App">
        
          <h1 className="App-title">TinderIn profile editor</h1>
          <p>Name: Lego Sir</p>
          <img src='https://randomuser.me/api/portraits/lego/2.jpg' />
       
      </div>
    );
  }
}

export default App;
