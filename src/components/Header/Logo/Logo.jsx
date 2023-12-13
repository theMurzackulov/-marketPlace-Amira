import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Header-Style/logo.style.css'

const Logo = () => {
  return (
      <div className='logo'>
        <Link to="/">
          <img src="../images/logo.png" alt="logo" title='logo'/>
        </Link>
      </div>
  )
}

export default Logo