import React from 'react'
import './../public/css/Main.css'
import HeaderMain from './main/HeaderMain'
import StatisticsMain from './main/StatisticsMain'
import CalenderTableMain from './main/CalenderTableMain'
import './../public/css/Main.css'

function Main() {
  return (
    <div className='Main'>
      <HeaderMain />
      <StatisticsMain />
      <CalenderTableMain />
    </div>
  )
}

export default Main
