import './App.css';

import React, { useState, Fragment } from 'react'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users'
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { About } from './components/pages/About';

const App = () =>{

  //defining states - users to store the result of users & loading state for loading .
  const[users,setUsers] = useState([])
  const[loading,setLoading] = useState(false)
  const[alert,setAlert] = useState(null)
  
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
  const searchUsers = async text => {
    //console.log(text)
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    //console.log(res.data.items)
    setUsers(res.data.items)
    setLoading(false)
  }

  //clear users from the state
  const clearUser = () => {
    console.log('clear user')
    setUsers([])
    setLoading(false)
  }

  //show alert
  const showAlert = (msg, type) => {
    //console.log('Please add!!!!!!!!!!!!!!!!!!')
    setAlert({msg, type})
    setLoading(false)

    //to make disappear the alert
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert}/>
            <Routes>
            {/* <Route exact path="/" element={<><Search/><Users/></>}/> */}
              <Route path='/' element={
                <>
                <Search 
                  searchUsers={searchUsers} 
                  showAlert={showAlert} 
                  showClear={users.length > 0 ? true : false}
                  clearUser={clearUser}/>
                <Users users={users} loading={loading}/>
                </>
              }/>
              <Route path='about' element={<About />}/>
            </Routes>
            
            </div>
        </div>
      </BrowserRouter>
    )
  }


export default App