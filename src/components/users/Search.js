import React, { Component } from 'react'

export default class Search extends Component {
  
    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState( {[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        //console.log(this.state.text)
        //if the user doesnt type anything we are gonna generate an alert
        if(this.state.text === '') {
            this.props.setAlert('Please enter some name','light')
        }
        else{
            //gonna pass props to upper function app.js
            this.props.searchUser(this.state.text)
            this.setState({ text: ''}) //resetting to blank value
        }
    }

    render() {
    return (
      <div>
          <form className='form' onSubmit={this.onSubmit}>
              <input type='text' name='text' placeholder='search users...'
                        onChange={this.onChange}
                        value= {this.state.text}
              ></input>
              <input type='submit' value='search' className='btn btn-dark btn-block'></input>
          </form>
          {this.props.showClear && <button className='btn btn-light btn-block' onClick={this.props.clearUser}>Clear</button>}
      </div>
    )
  }
}

