import React from 'react'

import { SlBasket } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import '../../styles/Header-Style/basket.style.css'

const Basket = () => {
  return (
      <div className='basket'>  
        <Link to="/basket">
          <ul>
            <li>
              <span>0 </span>$
            </li>
            <li>
              <SlBasket/>
              <span> 3</span>
            </li>
          </ul>
      </Link>
      </div>
  )
}

export default Basket