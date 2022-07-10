import React from "react"
import "./resume.css"
import ResumeApi from "./resumeApi"
import Card from "./card"
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import reactjs from "./reactjs.png"
import nodejs from './nodejs.png'
import sql from './sql.png'
import sqlbasic from './hackersqlb.png'
import sqlintermediate from './hackersqli.png'


const itemData = [
  {
    img: reactjs,
    title: 'REACTJS',
    author: 'HACKERRANK CERTIFIED',
  },
  {
    img: nodejs,
    title: 'NODEJS',
    author: 'HACKERRANK CERTIFIED',
  },
  {
    img: sqlbasic,
    title: 'SQL(basics)',
    author: 'HACKERRANK CERTIFIED',
  },
  {
    img: sqlintermediate,
    title: 'SQL(intermediate)',
    author: 'HACKERRANK CERTIFIED',
  },
  {
    img: sql,
    title: 'SQL',
    author: 'SKILLUP CERTIFIED',
  },

];




const Resume = () => {



  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center' style={{textAlign:'center'}}>
            <h1>9+ months OF EXPERIENCE</h1>
            <h1 style={{color:"darkseagreen"}}>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading' style={{color:'#1193EEF5'}} >
                <h4>2017-2023</h4>
                <h1>Education Quality</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}

                {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Personal Portfolio April Fools</h2>
                      <span>University of DVI (1997 - 2001)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>4.30/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                </div>*/}
              </div>
            </div>
            <div className='left'>
              <div className='heading' style={{color:'#1193EEF5'}} >
              
                <h1>Programming Skills</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='heading' style={{color:'#1193EEF5'}} >
              
                <h1 style={{textAlign:'center'}}>Certifications</h1>
              </div>
        <ImageList sx={{ width: '100%', height: 450 }} style={{justifyItems:'center'}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  
      </section>
    </>
  )
}

export default Resume