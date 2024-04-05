import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../HomeComponents/Navbar.js";
import Footer from "../HomeComponents/Footer.js";
import scheduleimage from '../Assets/scheduleding.png';
function ScheduledInterview() {
  const [scheduledInterviews, setScheduledInterviews] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify").then((res) => {
      if (!res.data.status) {
        navigate("/");
      }
    });

    axios
      .get("http://localhost:3001/auth/currentUser")
      .then((res) => {
        setCurrentUser(res.data.user);
      })
      .catch((err) => {
        console.error("Error fetching current user:", err);
      });
  }, []);

  useEffect(() => {
    if (currentUser) {
      const fetchScheduledInterviews = async () => {
        try {
          const userId = currentUser._id;

          const response = await axios.get(
            `http://localhost:3001/auth/scheduledInterviews/${userId}`
          );
          setScheduledInterviews(response.data.scheduledInterviews);
        } catch (error) {
          console.error(error);
        }
      };

      fetchScheduledInterviews();
    }
  }, [currentUser]);

  return (
      <>
      <Navbar/>
      <h1
        style={{ textAlign: "center", marginTop: "150px", color: "navy" }}
      >
        Scheduled Interviews
      </h1>
      <div
  style={{
    display: "flex",
    height: "100vh",
  }}
>
 
  <div
    style={{
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      marginBottom:"60px",
    }}
  >
    <img
      src={scheduleimage} // Replace 'imageSrc' with the actual image source
      alt="Placeholder Image" // Add appropriate alt text
      style={{
        maxWidth: "60%",
        maxHeight: "60%",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease", // Add transition for smooth animation
        marginBottom:"200px",
      }}
    />
  </div>

  {/* Right Part with List */}
  <div
    style={{
      flex: "1",
      overflowY: "auto", // Enable vertical scrolling
      padding: "20px",
    }}
  >
    <ul
      style={{
        listStyleType: "none",
        padding: "0",
        marginTop:"60px",
        marginRight:"10px",
      }}
    >
      {scheduledInterviews.map((interview, index) => (
        <li
          key={index}
          style={{
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "10px 0",
          }}
        >
          <p style={{ margin: "0", fontSize: "1.6rem", color: "#333" }}>
            <strong style={{ color: "#007bff" }}>Company:</strong>{" "}
            {interview.companyName}
          </p>
          <p style={{ margin: "0", fontSize: "1.6rem", color: "#666" }}>
            <strong style={{ color: "#007bff" }}>Interview Date:</strong>{" "}
            {interview.interviewDate}
          </p>
        </li>
      ))}
    </ul>
  </div>
</div>

      <Footer/>
      </>
  );
}

export default ScheduledInterview;
