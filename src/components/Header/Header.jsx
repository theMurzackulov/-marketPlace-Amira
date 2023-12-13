import React from 'react'

import '../styles/Header-Style/header.style.css'
import Basket from './Basket/Basket'
import Logo from './Logo/Logo'
import Search from './Search/Search'

const Header = ({searchValue, setSearchValue}) => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header_container">
          <Logo/>
          <Basket/>
        </div>
      </div>
    </div>
  )
}

export default Header