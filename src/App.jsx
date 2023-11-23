import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
      <Sidebar  />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </>
  )
}

export default App
