import React, { useState } from 'react';
import { SlBasketLoaded } from "react-icons/sl";
import { FaAngleDoubleRight } from "react-icons/fa";
import '../../../styles/Cards-style/Card.style.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const materialsName = ['Барби', 'Шелк', 'Флиз'];

  const [activeMaterials, setActiveMaterials] = useState(0);
  const [activeSizes, setActiveSizes] = useState(0);

  const materials = props.materials || [];
  const sizes = props.sizes || [];

  return (
      <div className='card'>
      <div className='card_img'>
        <img src={props.img} alt='' />
      </div>
      <p className='card_name'>{props.name}</p>
      <p className='card_discription'>
          {props.discription}
        </p>
      {/* <ul className='card_type'>
        {materials.map((materialId) => (
          <li
            key={materialId}
            className={activeMaterials === materialId ? 'active' : ''}
            onClick={() => setActiveMaterials(materialId)}
          >
            {materialsName[materialId]}
          </li>
        ))}
      </ul>
      <ul className='card_size'>
        {sizes.map((size, index) => (
          <li
            key={index}
            onClick={() => setActiveSizes(index)}
            className={activeSizes === index ? 'active' : ''}
          >
            {size}
          </li>
        ))}
      </ul> */}
      <div className='card_btns'>
        <p className='card_price'>
          <span>{props.price}</span>сом
        </p>
          <div className="btnsBtn">
          <button className='btnBasket'>
            <p><SlBasketLoaded /></p>
            <span>0</span>
          </button>
          <Link to="/*">
          <button className='btnMore'>
            <FaAngleDoubleRight />
          </button>
          </Link>
          </div>
          
      </div>
    </div>
  );
};

export default Card;
