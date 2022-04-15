import "./about.css";

import award from './harishs.png'
import company from './hectae.jpeg'
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        
        <div className="a-card">
          <img
            src={award}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <button style={{marginRight:"10px",borderRadius:"10px",backgroundColor:"palevioletred",borderBlockColor:"palevioletred"}}>Hire ME</button><button style={{borderRadius:"10px"}}>Download Resume</button>
        <div className="a-award">
          <img src={company}  alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Present working position</h4>
            <p className="a-award-desc" style={{color:"blue"}}>
             Hectea analytics and software solutions
            </p>
            <p className="a-award-desc">
            Software developer intern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
