import React from 'react'

import '../styles/NotFound.css'

const NotFoundBlock = () => {
  return (
    <div className='container'>
      <div className="contentBlock">
        <img src="../images/404.png" alt="" />
        <p>Page not found</p>
      </div>
    </div>
  )
}

export default NotFoundBlock