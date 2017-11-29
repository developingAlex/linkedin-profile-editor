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
  
// ****** WHEN THE FIRST NAME FIELD IS EDITED
    onChangeFirstName = (event) => {
      const input = event.target
      const newFirstName = input.value
      this.setState((prevState) => {
        const user = prevState.user
        const newUser = {
          ...user,
          firstName: newFirstName
        }
        // user.firstName = newFirstName //mutated way
        return {
          user: newUser //telling the state: update your user with this user.
        }
      })
    }

// ****** WHEN CLICKING THE 'UPDATE IMAGE' BUTTON
    onChangeImageURL = (event) => {
      const newUrl = this.profileImageUrlField.value
      this.setState((prevState) => {
        const user = prevState.user
        const newUser = {
          ...user,
          profileImageURL: newUrl
        }
        return {
          user: newUser
        }
      })
    }

// ****** WHEN THE LAST NAME FIELD IS EDITED
  onChangeLastName = (event) => {
    const input = event.target
    const newlastName = input.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = {
        ...user,
        lastName: newlastName
      }
      // user.firstName = newFirstName //mutated way
      return {
        user: newUser //telling the state: update your user with this user.
      }
    })
  }
  render() {

    const user = this.state.user

    return (
      <div className="App">
        
        <h1 className="App-title">LinkedIn profile editor</h1>
        <p>Name: {user.firstName} {user.lastName}</p>
        <img src={user.profileImageURL} />
        <p>
        <label>
          First Name:
          { ' ' }
          <input
            value={user.firstName}
            onChange ={
                  this.onChangeFirstName              
            }
          />
        </label>
        </p>
        <p>
        <label>
          Last Name:
          { ' ' }
          <input
            value={user.lastName}
            onChange ={
                  this.onChangeLastName              
            }
          />
        </label>
        </p>
        <p>
        <label>
          ImageURL:
          { ' ' }
          <input
            ref={(input) => {this.profileImageUrlField = input; }}
            defaultValue={user.profileImageURL}
          />
          <button text='yeah' onClick={
            this.onChangeImageURL
          } 
          >
          Update Image
          </button>
        </label>
        </p>
      </div>
    );
  }
}

export default App;
