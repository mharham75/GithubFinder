import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
          <form>
              <input type='text' name='text' placeholder='search users...'></input>
              <input type='submit' value='search' className='btn btn-dark btn-block'></input>
          </form>
      </div>
    )
  }
}

