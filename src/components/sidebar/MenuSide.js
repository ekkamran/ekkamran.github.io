import React, { useState } from 'react'
import './../../public/css/SideBar.css'

function MenuSideBar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='Menu'>
      <ul className='Menu-mobile' style={!showMenu ? { height: '125px' } : {}}>
        <li style={showMenu ? { display: 'none', height: '100px' } : {}}>
          <a href='#/' style={{ color: '#fff' }}>
            <i
              onClick={() => setShowMenu(true)}
              className={showMenu ? '' : 'Grip'}
            ></i>
          </a>
        </li>
        <li style={!showMenu ? { display: 'none' } : {}}>
          <a href='#/' style={{ color: '#fff' }}>
            <i
              onClick={() => setShowMenu(false)}
              className={showMenu ? 'fas fa-close' : ''}
            ></i>
          </a>
        </li>
        <li className='HoverMenu' style={!showMenu ? { display: 'none' } : {}}>
          <a href='#/' style={{ paddingRight: '308px', paddingBottom: '14px' }}>
            <i className={showMenu ? 'fas fa-home' : ''}></i>
            {showMenu ? ' Projects' : ''}
          </a>
        </li>
        <li className='HoverMenu' style={!showMenu ? { display: 'none' } : {}}>
          <a href='#/' style={{ paddingRight: '315px', paddingBottom: '14px' }}>
            <i className={showMenu ? 'fas fa-edit' : ''}></i>{' '}
            {showMenu ? ' Statistic' : ''}
          </a>
        </li>
        <li className='HoverMenu' style={!showMenu ? { display: 'none' } : {}}>
          <a href='#/' style={{ paddingRight: '360px', paddingBottom: '14px' }}>
            <i className={showMenu ? 'fas fa-user' : ''}></i>
            {showMenu ? ' Users' : ''}
          </a>
        </li>
        <li className='HoverMenu' style={!showMenu ? { display: 'none' } : {}}>
          <a href='#/' style={{ paddingRight: '385px', paddingBottom: '14px' }}>
            <i className={showMenu ? 'fas fa-file' : ''} aria-hidden='true'></i>
            {showMenu ? ' Files' : ''}
          </a>
        </li>
        <li className='HoverMenu' style={!showMenu ? { display: 'none' } : {}}>
          <a href='#/' style={{ paddingRight: '307px', paddingBottom: '14px' }}>
            <i className={showMenu ? 'fas fa-cog' : ''}></i>
            {showMenu ? ' Settings' : ''}
          </a>
        </li>
      </ul>
      <ul className='Menu-desctop'>
        <li>
          <a href='#/'>
            <i className='fas fa-home'></i> Projects
          </a>
        </li>
        <li>
          <a href='#/'>
            <i className='fas fa-edit'></i> Statistic
          </a>
        </li>
        <li>
          <a href='#/' style={{ paddingRight: '237px' }}>
            <i className='fas fa-user'></i> Users
          </a>
        </li>
        <li>
          <a href='#/' style={{ paddingRight: '252px' }}>
            <i className='fa fa-file' aria-hidden='true'></i> Files
          </a>
        </li>
        <li>
          <a href='#/'>
            <i className='fas fa-cog'></i> Settings
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuSideBar
