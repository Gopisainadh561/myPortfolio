import React from 'react'
import Img from '../../photos/cover.jpg'
import './Home.css'

export default function Home() {
  return (
    <div id='Home'>
        <span style=
            {{ backgroundImage: `url(${Img})`,
               width:'100%',
               height:'100%',
               backgroundPosition:'center',
               backgroundRepeat:'no-repeat',
               position:'absolute',
               backgroundSize:'1550px',
               zIndex:0
            }}></span>

        <div id="opening">
          <div id="myname">GOPI SAINADH G</div>
          <div id="bio">SOFTWARE ENGINEER, FRONTEND DEVELOPER.</div>
        </div>
    </div>
  )
}
