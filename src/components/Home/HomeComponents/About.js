import React from "react";
import AboutBackground from "../Assets/aboutus.png";
import Image1PD from "../Assets/placementdirector.jpg";
import Image2AC1 from "../Assets/assistantcoord1.jpg";
import Image3AC2 from "../Assets/assistantcoord2.jpg";
import AboutBackgroundImage from "../Assets/aboutusimg.png";
import '../Home-CSS/About.css';
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <p className="primary-subheading" style={{ color: "navy", fontSize: "50px",marginTop:"-450px",marginRight:"-450px"}}>About</p>
      <div className="about-section-text-container">
        <div className="card-container" style={{marginTop:"150px",marginRight:"30px"}}>
          <div className="card" style={{height:"400px",width:"250px"}}>
            <img src={Image1PD} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{fontSize:"1.2rem"}}><b>Shailendra Vidhate</b><br></br>Placement Director</p>
            </div>
          </div>
          <div className="card" style={{height:"400px",width:"250px"}}>
            <img src={Image2AC1} className="card-img-top" alt="..." />
            <div className="card-body">
            <p className="card-text" style={{fontSize:"1.2rem"}}><b>Yash Davda</b><br></br>Assistant Placement Co-ordinator</p>
            </div>
          </div>
          <div className="card" style={{height:"400px",width:"250px"}}>
            <img src={Image3AC2} className="card-img-top" alt="..." />
            <div className="card-body">
            <p className="card-text" style={{fontSize:"1.2rem"}}><b>Ashley Khuranna</b><br></br>Assistant Placement Co-ordinator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
