import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/project" element={<Project/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
