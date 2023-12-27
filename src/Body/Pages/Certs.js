import React from 'react'
import './Certs.css'
import nptel from "../../certs/python on datascience(Nptel).jpg"
import react from "../../certs/React Basics.jpg"
import google from "../../certs/crash course on python.jpg.jpg"
import cyber from"../../certs/cybersecurity.jpg"




export default function Certs() {
  return (
    <div id='Certs'>
        <div id='title'>
            Cerifications
        </div>
        <div id='Certs-body'>
            <div id='cert'>
                <img src={nptel} alt="Python for Data Science"></img>
                <p>Python for DataScience by Nptel</p>
            </div>
            <div id='cert'>
                <img src={react} alt="React Basics"></img>
                <p>React Basics by Meta</p>
            </div>
            <div id='cert'>
                <img src={google} alt="Crash course on Python"></img>
                <p>Crash course on Python by Google</p>
            </div>
            <div id='cert'>
                <img src={cyber} alt="CyberSecurity Virtual Internship"></img>
                <p>CyberSecurity Virtual Internship</p>
            </div>
        </div>
    </div>
  )
}
