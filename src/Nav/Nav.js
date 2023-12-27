import React from 'react'
import './Nav.css'

export default function Nav() {
  function show(){
    if (window.screen.width<=500){
      if (document.getElementById('Nav').style['display']==='block'){
        document.getElementById('Nav').style['display']='none'
      }else{
        document.getElementById('Nav').style['display']='block'
      }
    }
  }

  return (
    <>
      <button id="navButton" onClick={()=>{show()}}>=</button>
      <nav id="Nav">
        <ul>
            <a href='#Home' onClick={()=>{show()}}><li>Home</li></a>
            <a href='#About' onClick={()=>{show()}}><li>About</li></a>
            <a href='#Project' onClick={()=>{show()}}><li>Project</li></a>
            <a href='#Edu' onClick={()=>{show()}}><li>Education</li></a>
            <a href='#Certs' onClick={()=>{show()}}><li>Certifications</li></a>
            <a href='#Contact' onClick={()=>{show()}}><li>Contact</li></a>
        </ul>
      </nav>
    </>
  )
}
