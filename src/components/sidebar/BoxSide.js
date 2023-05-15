import React from 'react'
import './../../public/css/SideBar.css'

function BoxSide() {
  return (
    <div className='Box'>
      <div className='BoxSide'>
        <p>
          <img
            className='ImageBox'
            alt='Trevor Henderson'
            src='https://v4.mui.com/static/images/avatar/1.jpg'
          />
          <span className='name'>Ralph Edwardo</span>
          <i className='fas fa-edit edit'></i>
        </p>
        <button className='button'>Premium</button>
      </div>
    </div>
  )
}

export default BoxSide
