import React from 'react'

function HeaderMain() {
  return (
    <div className='HeaderMain'>
      <div className='TitleProject'>
        <h1>
          <i class='fa-solid fa-arrow-left'></i> First Project{' '}
          <i className='fas fa-edit'></i>
        </h1>
      </div>
      <div className='Users'>
        <span>
          <img
            className='ImageBox'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span>
          <img
            className='ImageBox'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span>
          <img
            className='ImageBox'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span>
          <img
            className='ImageBox'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span>
          <img
            className='ImageBox'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span className='badge1'>12+</span>
        <span className='badge2'> + </span>
      </div>
    </div>
  )
}

export default HeaderMain
