import React, { useState } from 'react'

const Search = ({ searchUsers, showAlert, showClear, clearUser }) => {
  
    const [text,setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        //console.log(this.state.text)
        //if the user doesnt type anything we are gonna generate an alert
        if(text === '') {
            showAlert('Please enter some name','light')
        }
        else{
            //gonna pass props to upper function app.js
            searchUsers(text)
            setText('') //resetting to blank value
        }
    }

    return (
      <div>
          <form className='form' onSubmit={onSubmit}>
              <input type='text' name='text' placeholder='search users...'
                        onChange={onChange}
                        value= {text}
              ></input>
              <input type='submit' value='search' className='btn btn-dark btn-block'></input>
          </form>
          {showClear && <button className='btn btn-light btn-block' onClick={clearUser}>Clear</button>}
      </div>
    )
  }

  export default Search

