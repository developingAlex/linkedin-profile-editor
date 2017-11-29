import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    user: {
      firstName: 'Alex',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/lego/2.jpg',
      profileImageURLField: 'https://randomuser.me/api/portraits/lego/2.jpg'
      
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

// ****** WHEN CHANGING THE VALUE IN THE 'IMAGEURL' FIELD
    onChangeImageURL = (event) => {
      console.log(event.currentTarget)
      console.log('event.currentTarget')

      // console.log(this.profileImageUrlField)
      const newUrl = event.target.value
      this.setState((prevState) => {
        const user = prevState.user
        const newUser = {
          ...user,
          profileImageURLField: newUrl
        }
        return {
          user: newUser
        }
      })
    }

// ****** WHEN CLICKING THE 'UPDATE IMAGE' BUTTON
    onSubmitNewImage = (event) => {
      event.preventDefault()
      const form = event.target

      console.log('form.elements.profileImageURL.value')
      console.log(form.elements.profileImageURL.value)
      this.setState((prevState) => {
        const user = prevState.user
        const newUser = {
          ...user,
          profileImageURL: user.profileImageURLField
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
        {user.profileImageURLField}
        <form
          onSubmit={this.onSubmitNewImage}>
          <input
            name = 'profileImageURL'
            type='text'
            onChange={this.onChangeImageURL}
            // ref={(input) => {this.profileImageUrlFieldElement = input; }}
            value={user.profileImageURLField}
          />
          <label>
            ImageURL:
            { ' ' }
            <input 
            type='submit'
            value='Update Image'
            />
          </label>
        </form>
        
      </div>
    );
  }
}

export default App;
