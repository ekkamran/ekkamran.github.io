import React from 'react'
import HeaderSide from './sidebar/HeaderSide'
import MenuSide from './sidebar/MenuSide'
import BoxSide from './sidebar/BoxSide'
import './../public/css/SideBar.css'

function SideBar() {
  return (
    <div className='Side'>
      <HeaderSide />
      <MenuSide />
      <BoxSide />
    </div>
  )
}

export default SideBar
