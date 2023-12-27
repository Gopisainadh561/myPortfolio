import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Edu from './Pages/Edu'
import Contact from './Pages/Contact'
import Certs from './Pages/Certs'

export default function Body() {
  return (
    <>
      <Home></Home>
      <hr></hr>
      <About></About>
      <hr></hr>
      <Project></Project>
      <hr></hr>
      <Edu></Edu>
      <hr></hr>
      <Certs></Certs>
      <hr></hr>
      <Contact></Contact>
    </>
  )
}
