import React from 'react'
import './contact.css'
export default function Contact() {

    







  return (
    <div>



    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Info</h1>
          <div className="c-info">
            <div className="c-info-item">
            <li className='fa fa-phone' style={{marginRight:"12px"}}></li>
              +91 6300906118
            </div>
            <div className="c-info-item">
          <li className='fa fa-google' style={{marginRight:"12px"}}></li>
              harshatalluru20@gmail.com
            </div>
            <div className="c-info-item">
            <li className='fa fa-address-card' style={{marginRight:"12px"}}></li>
              mabbugunta palem (v) , dagadarthi (m) , spsr nellore (d) ,Ap
            </div>
            <div className=''>
            <li className='fa fa-facebook'  style={{fontSize:"25px" ,margin:"10px"}}></li>
            <li className='fa fa-github'    style={{fontSize:"25px" ,margin:"10px"}}></li>
            <li className='fa fa-whatsapp'  style={{fontSize:"25px" ,margin:"10px"}}></li>
            <li className='fa fa-linkedin'  style={{fontSize:"25px" ,margin:"10px"}}></li>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available 
     
          </p>
          <form  >
            <input  type="text" placeholder="Name" name="user_name" />
         
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {"Thank you..."}
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
