
import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import Skills from './Skills'
import Project from './Project'
import About from './About'
import Contact from './Contact';
import Footer from './Footer'

function App() {

  return (
  <BrowserRouter>
  <input type="checkbox" id="darkmode" />
  <div className='wrapper'>
  <label htmlFor="darkmode"><i className="fa-solid fa-circle-half-stroke"></i></label>
  <Header />
  <Routes>
    <Route path="*" element={<Hero />} />
    <Route path="/hero" element={<Hero />} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/projects" element={<Project/>} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    
  </Routes>

  <Footer />
  </div>
  </BrowserRouter>
  )
}

export default App
