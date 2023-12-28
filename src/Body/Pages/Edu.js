import React, { useState } from 'react'
import "./Edu.css"

export default function Edu() {


    function body(e){
        let places=['clg','inter','school'];
       

        for(let i of places){
            if (i===e){
                if(document.getElementById(i).style['display']==='none'){
                    document.getElementById(i).style['display']='block';
                }else{
                    document.getElementById(i).style['display']='none';
                }
            }
            else{
               document.getElementById(i).style['display']='none';
            }
        }
    }
  return (
    <div id="Edu">
        <div id="Edu-head">
            <div id="title">Education</div>
        </div>
        <div id='Edu-body'>
            <div id="place" onClick={()=>{body("clg")}} >
                <p>Kkr & Ksr Institute of Technology and Sciences</p>
                <p>2020-2024</p>
            </div>
                    <div id='clg' className='lilBox' style={{display:'none'}}>
                    Bachelor of Technology (B.Tech) in the stream of Computer Science and Engineering ,<br></br>
                     Graduating in 2024 CGPA: 8.84
                    </div>
            <div id="place" onClick={()=>{body("inter")}}>
                <p>Narayana Junior College</p>
                <p>2018-2020</p>
            </div>
                    <div id='inter' className='lilBox' style={{display:'none'}}>Board of Intermediate Education(Andhra Pradesh) , <br></br>
                    GPA: 9.67</div>
            <div id="place" onClick={()=>{body("school")}}>
                <p>Venkateswara School</p>
                <p>2017-2018</p>
            </div>
                    <div id='school' className='lilBox' style={{display:'none'}}>Board of Secondary School Education(Andhra Pradesh),<br></br>
                     GPA:9.8</div>
        </div>
    </div>
  )
}
