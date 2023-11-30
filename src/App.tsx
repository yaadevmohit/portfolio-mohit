import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <div className='main-container'>
        <NavBar />
        <Hero />
      </div>
      <Footer/>
    </>
  )
}

export default App
