import React from 'react'
import '../styles/Basket.style.css'
import { TiDeleteOutline } from "react-icons/ti";
import { SlBasketLoaded } from 'react-icons/sl'
import { IoChevronBackOutline, IoQrCodeOutline  } from "react-icons/io5";
import BasketCard from './BasketCard/BaskerCard'
import { Link } from 'react-router-dom';

const BasketBlock = () => {
  return (
    <div className='container'>
      <div className="basketBlock">
        <div className="basketBlock_header">
          <h2><SlBasketLoaded/>
            Корзина
          </h2>
          <button>
            <span><TiDeleteOutline /></span>
            Очистить корзину
          </button>
        </div>
        <div className="basketCards">
          <BasketCard/>
          <BasketCard/>
          <BasketCard/>
          <BasketCard/>
          <BasketCard/>
          <BasketCard/>
          <BasketCard/>
          <BasketCard/>
        </div>
        <ul className='result'>
          <li>Всего товаров: 
            <span> 3 шт</span>
          </li>
          <li>Сумма заказов: 
            <span className='orange'> 12290 $</span>
          </li>
        </ul>
        <div className="footer">
          <Link to="/">
            <button className='btnBack'><IoChevronBackOutline/> Вернуться назад</button>
          </Link>
          <button className='btnBuy'><IoQrCodeOutline/> Оплатить</button>
        </div>
      </div>
    </div>
  )
}

export default BasketBlock