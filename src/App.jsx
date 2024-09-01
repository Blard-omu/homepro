import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Listings from './pages/Listings';
import Menu from './components/navs/Menu';
import Blog from './pages/Blog';


const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/listings' element={<Listings/>} />
      <Route path='/blog' element={<Blog/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App