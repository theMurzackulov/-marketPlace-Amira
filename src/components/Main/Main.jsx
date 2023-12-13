import React from 'react'
import '../styles/Main-Style/main.style.css'
import Cards from './Cards/Cards'

const Main = () => {
  return (
    <div className='main'>
      <div className="container">
          <Cards/>
      </div>
    </div>
  )
}

export default Main