import React from 'react'
import SideBar from './components/SideBar'
import Main from './components/Main'
import './App.css'

function App() {
  return (
    <div id='my-div'>
      <div className='container'>
        <SideBar />
        <Main />
      </div>
    </div>
  )
}

export default App
