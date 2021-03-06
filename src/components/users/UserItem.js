import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ user: {login,html_url,avatar_url}}) => {

    return (
      <div className='card text-center'>
          <img src={avatar_url} alt='' className='round-img' style={{ width:'60px'}}/>
          <h3>{login}</h3>
          <div><a href={html_url} className='btn btn-dark btn-sm my-1'>More</a></div>
      </div>
    )
  }

  //defining the type ofprops expected
UserItem.prototypes = {
    user: PropTypes.object.isRequired
}

  export default UserItem

