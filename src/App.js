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

    const user = this.state.user

    return (
      <div className="App">
        
          <h1 className="App-title">LinkedIn profile editor</h1>
          <p>Name: {user.firstName} {user.lastName}</p>
          <img src={user.profileImageURL} />
       
      </div>
    );
  }
}

export default App;
