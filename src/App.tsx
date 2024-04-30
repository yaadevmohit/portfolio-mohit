import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import { useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <>
    {document.body.style.backgroundColor = darkMode ? "#352f44" : "hsl(38, 75%, 94%)"}
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<About darkMode={darkMode}/>} />
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
