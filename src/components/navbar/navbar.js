import React from 'react'
import './navbar.css'

const Navbar = ({theme}) => {
  return (
    <div className='navs' >
        <div className='profile-main'>
          <nav className='navbar'>
          <div className=' profile-nav-name' style={{fontWeight:"bold"}}>Harish Profile</div>
          
<ul className='profile-list'>
  
    <input type="checkbox" id="checkbox_toggle" />
 <label for="checkbox_toggle" classname="hamburger ham" ><div className='ham'>&#9776;</div></label>
 <div className='Menu'>
 <a href="#profile" style={{textDecoration:"none"}}  > <li>Home</li></a>
 <a href="#about" style={{textDecoration:"none"}}  ><li>About</li></a>
    <a href="#resume" style={{textDecoration:"none"}}  ><li >Resume</li></a>
    <a href="#contact" style={{textDecoration:"none"}}  > <li>Contact us</li></a>
    <li onClick={theme} className="fa fa-moon"  style={{color:"black"}}></li>
   
  </div>
    
</ul>
</nav>


    




        

    

</div>

        </div>
        
    
  
  )
}

export default Navbar
