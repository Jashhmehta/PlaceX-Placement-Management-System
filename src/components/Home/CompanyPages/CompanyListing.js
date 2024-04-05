import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, deleteCompany } from "../../../redux/companySlice.jsx";
//import ScheduledInterview from "./ScheduledInterview.js";
import Navbar from "../HomeComponents/Navbar.js";
import Footer from "../HomeComponents/Footer.js";

function CompanyListing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);

  const [currentUser, setCurrentUser] = useState(null);

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

  console.log(currentUser);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/auth/getCompanies"
        );
        dispatch(getCompanies(response.data));
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{ textAlign: "center", marginTop: "100px" }}>
    <h1 style={{ fontSize: "3rem", color: "navy" }}>
      Ongoing Drives
    </h1>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", // Allow cards to wrap onto multiple lines
      gap: "20px", // Gap between cards
    }}
  >
    {companies.map((company) => (
      <div
        key={company.id}
        style={{
          width: "300px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          margin: "10px", // Add margin to separate cards
          overflow: "hidden", // Hide overflowing content
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for cards
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#007bff",
              marginBottom: "10px",
            }}
          >
            {company.companyname}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            Profile: {company.jobprofile}
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            CTC: {company.ctc} LPA
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            Interview Date: {company.doi}
          </p>
        </div>
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <Link
            to={`/companypage/${company.id}`}
            style={{
              textDecoration: "none",
              backgroundColor: "#001f3f", // Navy blue background color
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              display: "inline-block",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Box shadow for button
              transition: "transform 0.3s ease", // Animation for button
            }}
          >
            Show Details
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>;


    <Footer/>
    </>
  );
}

export default CompanyListing;
