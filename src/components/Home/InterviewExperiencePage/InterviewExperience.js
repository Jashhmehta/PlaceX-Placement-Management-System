import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import sanitizeHtml from 'sanitize-html';
import Navbar from "../HomeComponents/Navbar.js";

function InterviewExperience() {
  
  const [interviews, setInterviews] = useState([]);
  


  const fetchInterviews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/auth/fetchinterviewexperience');
      setInterviews(response.data.data);
    } catch (error) {
      console.error('Error fetching interview experiences:', error);
    }
  };

 
  useEffect(() => {
    fetchInterviews();
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify").then((res) => {
      if (!res.data.status) {
        
      }
    });

  }, []);



  const sanitizeContent = (content) => {
    return sanitizeHtml(content, {
      allowedTags: ['p', 'br', 'b', 'i', 'u', 'em', 'strong'],
      allowedAttributes: {},
    });
  };
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'easy':
        return '#28a745'; 
      case 'medium':
        return '#ffc107'; 
      case 'difficult':
        return '#e70000'; 
      default:
        return '#6c757d'; 
    }
  };

  const getResultColor = (result) => {
    return result === 'Successful' ? '#28a745' : '#e70000'; 
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <Navbar/>

      <h2 style={{ marginBottom: '20px', color: '#333' }}>Interview Experiences</h2>
      <Link to="/addexperience">
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>+ Add Interview Experience</button>
      </Link>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {interviews.map((interview) => (
          <li key={interview._id} style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ marginBottom: '10px', color: '#007bff' }}>Posted by: {interview.username}</h3>
                <h3 style={{ marginBottom: '10px', color: '#333' }}>Company: {interview.companyName}</h3>
                <p style={{ marginBottom: '10px', color: '#555', fontSize: '26px' }}>Position: {interview.position}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ backgroundColor: getDifficultyColor(interview.interviewLevel), color: '#fff', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', fontSize: '16px' }}>
                  {interview.interviewLevel}
                </div>
                <div style={{ backgroundColor: getResultColor(interview.result), color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '16px' }}>
                  {interview.result}
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: sanitizeContent(interview.experience) }} style={{ marginBottom: '10px', fontSize: '18px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default InterviewExperience;
