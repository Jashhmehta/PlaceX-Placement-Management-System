import React from "react";
import JobDescrip from "../Assets/jobdecript.png";
import ManageCompany from '../Assets/managecompany.png';
import CheckInterviewScheduled from "../Assets/checkinter.png";

const Work = () => {
  const workInfoData = [
    {
      image: JobDescrip,
      title: "See the Students Report based on Criteria",
      text: "Easily access comprehensive student reports tailored to specific criteria, empowering informed decision-making for optimized placement outcomes.",
    },
    {
      image: ManageCompany,
      title: "Manage Companies",
      text: "Efficiently add and manage company profiles, facilitating streamlined interaction and collaboration between recruiters and students for enhanced placement opportunities.",
    },
    {
      image: CheckInterviewScheduled,
      title: "Check the Interview Reports",
      text: "Effortlessly access and analyze interview reports to track student placement status, enabling informed decision-making and efficient placement management.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" style={{color:"navy",fontSize:"50px"}}>Work</p>
        <h1 className="primary-heading"style={{fontSize:"40px"}}>How It Works</h1>
        <p className="primary-text">
        Our Placex platform enhances the job search process by facilitating seamless matching between students and pertinent job openings. 
        We prioritize efficient navigation and foster effective communication channels between students and recruiters, 
        optimizing the placement experience for all stakeholders.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} style={{width:"270px",height:"550px"}}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" style={{width:"150px",height:"150px"}} />
            </div>
            <h2 style={{fontSize:"1.5rem"}}>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
