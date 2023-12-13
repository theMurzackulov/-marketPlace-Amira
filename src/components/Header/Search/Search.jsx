import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { IoClose } from "react-icons/io5";

import '../../styles/Header-Style/search.style.css'

const Search = ({searchValue, setSearchValue}) => {
  return (
    <div className='search'>
      <form className='form'>
        <label><BsSearch/></label>
        <input  
            value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)} 
              type="text" 
              placeholder='Поиск товаров'/>
        {searchValue &&  <p className='cleanInput'
                            onClick={() => setSearchValue('')}>
          <IoClose />
        </p>}
      </form>
    </div>
  )
}

export default Search