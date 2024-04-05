import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHome from "../AdminHome.js";
import Footer from "../AdminReusableComponents/AdminFooter.js";
import '../Admin-CSS/ScheduledInterviewData.css';

function ScheduledInterviewData() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/auth/companyApplicants');
        setCompanyData(response.data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanyData();
  }, []);


  const handleUpdatePlacementStatus = async (userId, companyId, status) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/updatePlacementStatus', {
        userId,
        companyId,
        status
      });

      console.log(response.data);
      alert(response.data.message); // Display response message in alert
    } catch (error) {
      console.error('Error updating placement status:', error.response.data.message);
      alert(error.response.data.message); // Display error message in alert
    }
  };

  return (
    <>
      <AdminHome/>
      <h1 className='page-heading' style={{marginTop:"150px"}}>Company-wise Student Applications</h1>
      <div className="split">
        <div className="right">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {companyData.map((company, index) => (
                 
                  

                  <React.Fragment key={index}>
                    {company.applicants.map((applicant, appIndex) => (
                      
                      <tr key={appIndex}>
                        <td>{company.companyName}</td>
                        <td>{applicant.name}</td>
                        <td>{applicant.email}</td>
                        <td>
                     
                          <button  className="btn btn-sm btn-primary" style={{ backgroundColor: 'green', color: 'white', width: '130px' }} onClick={() => handleUpdatePlacementStatus(applicant.userId, company.companyId, 'Placed')}>Interview Cleared</button>
                          <button  className="btn btn-sm btn-primary" style={{ backgroundColor: '#EF0107', color: 'white', width: '130px' }} onClick={() => handleUpdatePlacementStatus(applicant.userId, company.companyId, 'Unplaced')}>Interview Failed</button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ScheduledInterviewData;
