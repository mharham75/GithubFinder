import './App.css';

import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users'
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';

class App extends Component {

  //defining states - users to store the result of users & loading state for loading .
  state = {
    users: [],
    loading: false,
    alert: null
  }

  //this is the method call when component is mounted to the DOM
  // async componentDidMount(){
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   //setting loading to true coz we aint fetching as of now 
  //   this.setState({ loading: true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   //const res = await axios.get('https://api.github.com/users')
  //   //we have fetched the data so changing the states
  //   //loading will be false & users array will be updated with data
  //   this.setState({ users: res.data, loading: false})
  // }

  //search git users
  searchUser = async text => {
    //console.log(text)
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    //console.log(res.data.items)
    this.setState({ users: res.data.items, loading: false})
  }

  //clear users from the state
  clearUser = () => {
    console.log('clear user')
    this.setState({ users: [], loading: false})
  }

  //show alert
  setAlert = (msg, type) => {
    //console.log('Please add!!!!!!!!!!!!!!!!!!')
    this.setState({ alert: {msg,type}})

    //to make disappear the alert
    setTimeout(() => {
      this.setState({ alert: null})
    }, 3000);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search 
            searchUser={this.searchUser} 
            clearUser={this.clearUser} 
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}  
          />
          <Users loading={this.state.loading} users={this.state.users}/>
          </div>
      </div>
    )
  }
}

export default App