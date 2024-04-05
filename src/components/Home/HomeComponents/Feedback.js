import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Feedback = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" style={{color:"navy",fontSize:"50px"}}>Feedback</p>
        <h1 className="primary-heading" style={{fontSize:"40px"}}>What They Are Saying</h1>
       
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Efficient and user-friendly platform! Simplifies the job application process and keeps you informed 
        about upcoming interviews.Great tool for managing placement opportunities.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jason</h2>
      </div>
    </div>
  );
};

export default Feedback;
