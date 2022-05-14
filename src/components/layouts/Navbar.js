import React from 'react'
import PropTypes from 'prop-types';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = ({title}) => {

    return (
      <nav className='navbar bg-primary'>
          <h1>
              {title}
          </h1>
      </nav>
    )
  }

 //giving default props in case we dont add prpos from app
  Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

//defining what type of props should we expect 
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}


export default Navbar
