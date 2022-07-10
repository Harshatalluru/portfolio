import React, { useState } from 'react'
import './profile.css'
//import Typical from 'react-typical'
import award from './harish.png'
export default function Profile() {



  return (
    <div>
        <div className="i" id="profile">
      <div className="i-left">
        <div className="" style={{marginBottom:30}}>
          <h3 className="i-intro" style={{fontWeight:"100px",color:"darksalmon"}}>Hello, My name is</h3>
          <h1 className="i-name" style={{color:"pilepink"}}>Harish Talluru</h1>
          <div className="i-title">
         <h2 style={{color:"orange"}}>Full Stack Developer
           {/* <Typical

steps={['  Full stack developer', 3000, 'Front-End Developer', 2000,'Back-End Developer',2000]}
loop={Infinity}

/>*/}
          </h2>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
     
      </div>
      <div className="i-right">
        <div className="i-b" style={{marginLeft:20}}>
        <img src={award} alt="" className="i-img" />
        </div>
      </div>
    </div>
    </div>
  )
}
