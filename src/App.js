import React from 'react'
import Nav from './Nav'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Family from './Family'
import Resume from './Resume'
import Footer from './Footer'
import Contact from './Contact'
import Project0 from './Project0'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

function App() {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/family' element={<Family/>}  />
        <Route path='/resume' element={<Resume/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/project0' element={<Project0/>}  />
        <Route path='/project1' element={<Project1/>}  />
        <Route path='/project2' element={<Project2/>}  />
        <Route path='/project3' element={<Project3/>}  />
        
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  )
}

export default App