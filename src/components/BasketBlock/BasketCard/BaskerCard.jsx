import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";

import '../../styles/BasketCards.style.css';

const BasketCard = () => {
  return (
    <div className='basketCard'>
      <h2>Летнее платье</h2>
      <div className="contentBasket">
        <div className="imgText">
          <img src="../images/dress1.jpg" alt="" />
          <p>Шелк / 48-54</p>
        </div>
        <div className="options">
          <ul className='addBasket'>
            <li className='btnBasket'><FaPlus/></li>
            <li>1</li>
            <li className='btnBasket'><FaMinus/></li>
          </ul>
          <p className='basketPrice'>770 $</p>
          <button><RiDeleteBin5Line/></button>
        </div>
      </div>
    </div>
  )
}

export default BasketCard;
