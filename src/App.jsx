import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Project'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Projects/>} />
    </Routes>
    
    </>
  )
}

export default App
