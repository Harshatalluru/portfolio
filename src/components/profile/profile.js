import React, { useState } from 'react'
import './profile.css'
import Typical from 'react-typical'
import award from './harish.png'
export default function Profile() {



  return (
    <div>
        <div className="i" id="profile">
      <div className="i-left">
        <div className="">
          <h2 className="i-intro" style={{fontWeight:"50px",color:"darksalmon"}}>Hello, My name is</h2>
          <h1 className="i-name" style={{color:"pilepink"}}>Harish Talluru</h1>
          <div className="i-title">
         <h3 style={{color:"orange"}}>
            <Typical

steps={['  Full stack developer', 3000, 'Front-End Developer', 2000,'Back-End Developer',2000]}
loop={Infinity}

/>
          </h3>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
     
      </div>
      <div className="i-right">
        <div className="i-b"></div>
        <img src={award} alt="" className="i-img" />
      </div>
    </div>
    </div>
  )
}
