import './App.css'
// import { Routes, Route } from "react-router-dom"
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// import Projects from './components/Projects'
// import About from './components/About'
// import { useState } from 'react'
// import Animations from './components/Animations'
import cucksImg from "./assets/photo_gallery/cucks.jpg"

function App() {

  // const [darkMode, setDarkMode] = useState(false);

  // function toggleDarkMode() {
  //   setDarkMode(prevMode => !prevMode)
  // }
  // {document.body.style.backgroundColor = darkMode ? "#1A120B" : "white"}
  return (
    <>
      {/* <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/> */}
      <div className='main-container'>
        {/* <Routes>
          <Route path='/' element={<About darkMode={darkMode}/>} />
          <Route path='/projects' element={<Projects darkMode={darkMode}/>}/>
          <Route path="/animations" element={<Animations />}/>
        </Routes> */}
        <h1>#ballin 😎</h1>
        <img src={cucksImg} width={400} alt="Mohit Yadav profile photo"/>
      </div>
      {/* <Footer darkMode={darkMode}/> */}
    </>
  )
}

export default App
