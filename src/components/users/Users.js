import React from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'
import PropTypes from 'prop-types'

const Users = ({loading, users}) => {

    
        if(loading){
            return <Spinner />
        }
        else{
            return (
                <div style={userStyle}>
                    {users.map( user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
                )
            }
    
  }


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

Users.prototypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users