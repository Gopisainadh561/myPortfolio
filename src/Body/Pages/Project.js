import React from 'react'
import "./Project.css"
import Img from "../../photos/carpool.png"
import iot from "../../photos/iot1.jpg"

export default function Project() {
  return (
    <div id="Project">
        <div id="Project-head">
            <div id="title">Projects</div>
        </div>
        <div id="Project-body">
            <div id='Project-body-left' className="box">
                <img src={Img}></img>
            </div>
            <div id='Project-body-right' className="box">
                <div id="side-heading">Carpooling </div>
                <p>
                Created a comprehensive full-stack carpooling website aimed at connecting individuals to facilitate ride-sharing, thereby rProjectcing travel costs. Leveraging a technology stack that includes Python Flask and MongoDB, I successfully designed and implemented this platform to offer a seamless and user-friendly experience. My role encompassed the entire development lifecycle, from conceptualization and database design to front-end development and back-end functionalities.
                </p>
            </div>
        </div>
        <div id="Project-body">
            <div id='Project-body-left' className="box">
                <img src={iot}></img>
            </div>
            <div id='Project-body-right' className="box">
                <div id="side-heading">Smart No-Parking System </div>
                <p>
                Created an iot application which directly identify,alert the vehicles which are parked in No-parking areas.with this appiclation traffic congestion is reduced with out any need of human-intervention.This application is developed by using RFID technology and ESP8266 Module.for this project my team awarded with best Hack team in that bootcamp conducted in my college
                </p>
            </div>
        </div>
    </div>
  )
}
