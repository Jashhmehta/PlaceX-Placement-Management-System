import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import {useNavigate} from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'; 
import Navbar from '../HomeComponents/Navbar.js';
import Footer from '../HomeComponents/Footer.js';

function AddExperience() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    username:'',
    companyName: '',
    position: '',
    experience: '',
    interviewLevel: '',
    result: ''
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/interviewexperience");
      }
    });
  }, []);

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleExperienceChange = (value) => {
    handleChange('experience', value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/add-interview', formData);
      console.log(response.data);
      
      setFormData({
        username:'',
        companyName: '',
        position: '',
        experience: '',
        interviewLevel: '',
        result: ''
      });
      
      alert('Added your interview experience');
      navigate('/home')
    } catch (error) {
      console.error('Error:', error);      
      alert('Error submitting your interview experience');
    }
  };

  return (
    <>
  <Navbar/>
  <div style={{ maxWidth: '550px', margin: 'auto', fontFamily: 'Arial, sans-serif', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', height: 'fit-content',minHeight: '400px', overflowY: 'auto',marginTop:'80px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: "2.5rem", color: "navy"  }}>Add Interview Experience</h2>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginBottom: '0.5rem', color: '#333' }}>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e.target.name, e.target.value)} required style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginBottom: '0.5rem', color: '#333' }}>Company Name:</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={(e) => handleChange(e.target.name, e.target.value)} required style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginBottom: '0.5rem', color: '#333' }}>Position:</label>
        <input type="text" name="position" value={formData.position} onChange={(e) => handleChange(e.target.name, e.target.value)} required style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginBottom: '0.5rem', color: '#333' }}>Interview Experience:</label>
        <ReactQuill value={formData.experience} onChange={handleExperienceChange} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginBottom: '0.5rem', color: '#333' }}>Interview Level:</label>
        <select name="interviewLevel" value={formData.interviewLevel} onChange={(e) => handleChange(e.target.name, e.target.value)} required style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}>
          <option value="">Select Interview Level</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginBottom: '0.5rem', color: '#333' }}>Result:</label>
        <select name="result" value={formData.result} onChange={(e) => handleChange(e.target.name, e.target.value)} required style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}>
          <option value="">Select Result</option>
          <option value="Fail">Successful</option>
          <option value="Successful">Fail</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s', alignSelf: 'center', width: 'fit-content' }}>Submit</button>
    </form>
    {alertMessage && <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: alertColor, color: '#fff', borderRadius: '5px', textAlign: 'center' }}>{alertMessage}</div>}
  </div>
  <Footer/>
</>

  
  );
}

export default AddExperience;
