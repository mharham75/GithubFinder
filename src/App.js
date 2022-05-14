import './App.css';

import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users'
import axios from 'axios';

class App extends Component {

  //defining states - users to store the result of users & loading state for loading .
  state = {
    users: [],
    loading: false
  }

  //this is the method call when component is mounted to the DOM
  async componentDidMount(){
    //console.log('running APP compoment')
    //setting loading to true coz we aint fetching as of now 
    this.setState({ loading: true})
    const res = await axios.get('https://api.github.com/users')
    //we have fetched the data so changing the states
    //loading will be false & users array will be updated with data
    this.setState({ users: res.data, loading: false})
    console.log(res.data)
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
          </div>
      </div>
    )
  }
}

export default App