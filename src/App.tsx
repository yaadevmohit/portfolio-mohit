import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <>
      <NavBar />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path="/work" element={<Projects/>}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
