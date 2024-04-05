import React from "react";
import JobDescrip from "../Assets/jobdecript.png";
import ApplyJob from "../Assets/applyjob.png";
import CheckInterviewScheduled from "../Assets/checkinter.png";

const Work = () => {
  const workInfoData = [
    {
      image: JobDescrip,
      title: "See the Job Description",
      text: "Navigate to the Jobs tab in the header to view the list of companies participating in recruitment events. Stay informed about which companies are offering job opportunities through this intuitive interface.",
    },
    {
      image: ApplyJob,
      title: "Apply For Jobs",
      text: "Apply for jobs seamlessly through our platform. Browse available positions, submit applications, and track your progress all in one place, simplifying your job search process.",
    },
    {
      image: CheckInterviewScheduled,
      title: "Check the Interview Scheduled",
      text: "Stay updated on your interview schedule effortlessly. Access details about upcoming interviews, including date, time, and location, to ensure you're prepared and on time for each opportunity.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" style={{color:"navy",fontSize:"50px"}}>Work</p>
        <h1 className="primary-heading"style={{fontSize:"40px"}}>How It Works</h1>
        <p className="primary-text">
        Our Placex streamlines the job search process by matching students with relevant job opportunities.
        we ensure seamless navigation and effective communication between students and recruiters.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" style={{width:"150px",height:"150px"}} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
