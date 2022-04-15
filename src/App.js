import { useState } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Resume from "./components/resume/resume";





function App() {
  const [light,setlight] = useState("white")
const [color,setcolor] = useState("black")

function theme(){
  setlight("black")
  setcolor("white")
}

console.log(light)
  return (
    <div style={{backgroundColor:light,color:color}}>
 <Navbar theme={theme}/>
 <Profile/>
   <About/>
   <Resume/>
   <Contact/>
   <Footer/>
   
    </div>
  );
}

export default App;
