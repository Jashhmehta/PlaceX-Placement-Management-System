import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCompany } from "../../../redux/companySlice.jsx";
import AdminHome from "../AdminHome.js";
import Footer from "../AdminReusableComponents/AdminFooter.js"; 
import exampleImage from "../Assets/UpdateImage.png"; 
import "../Admin-CSS/UpdateCompany.css";


function UpdateCompany() {
  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/");
      }
    });
  }, []);
  const companies = useSelector((state) => state.companies.companies);
  const { id } = useParams();
  const company = companies.find((c) => c.id === id);
  const [companyname, setCompanyName] = useState(company.companyname);
  const [jobprofile, setJobProfile] = useState(company.jobprofile);
  const [ctc, setCtc] = useState(company.ctc);
  const [doi, setDoi] = useState(company.doi);
  const [tenthPercentage, setTenthPercentage] = useState(
    company.tenthPercentage
  );
  const [twelfthPercentage, setTwelfthPercentage] = useState(
    company.twelfthPercentage
  );
  const [sixthSemesterCGPA, setSixthSemesterCGPA] = useState(
    company.graduationCGPA
  );
  const [graduationCGPA, setGraduationCGPA] = useState(
    company.sixthSemesterCGPA
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const CompanyData = {
      companyname,
      jobprofile,
      ctc,
      doi,
      tenthPercentage,
      twelfthPercentage,
      graduationCGPA,
      sixthSemesterCGPA,
    };

    axios
      .put("http://localhost:3001/auth/updatecompany/" + id, CompanyData)
      .then((result) => {
        dispatch(
          updateCompany({
            id: id,
            companyname,
            jobprofile,
            ctc,
            doi,
            tenthPercentage,
            twelfthPercentage,
            graduationCGPA,
            sixthSemesterCGPA,
          })
        );

        navigate("/companies");
      })
      .catch((err) => {
        console.error("Error submitting data:", err);
      });
  };

  return (
    <>
      <AdminHome />
      <h1 style={{ marginTop: "90px", color: "navy" }}>
        Update Companies Data
      </h1>
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-center align-items-start">
          {/* Image column */}
          <div
            className="col-lg-4 d-flex justify-content-center align-items-center"
            style={{ minHeight: "400px", marginTop: "90px" }}
          >
            <img
              src={exampleImage}
              alt="Add Company Image"
              className="img-fluid"
              style={{
                maxWidth: "120%",
                maxHeight: "120%",
                marginLeft: "100px",
              }}
            />
          </div>

          {/* Form column */}
          <div className="col-lg-8 d-flex justify-content-center align-items-center custom-border">
            <div className="form-container">
              <div className="card" style={{maxWidth:"100vh",width:"900%"}}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Company Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Company Name"
                      value={companyname}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jobprofile">Job Profile</label>
                    <input
                      type="text"
                      id="jobprofile"
                      className="form-control"
                      placeholder="Job Profile"
                      value={jobprofile}
                      onChange={(e) => setJobProfile(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ctc">Offered CTC</label>
                    <input
                      type="number"
                      id="ctc"
                      value={ctc}
                      className="form-control"
                      placeholder="Offered CTC"
                      onChange={(e) => setCtc(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interviewdate">Interview Date</label>
                    <input
                      type="date"
                      id="interviewdate"
                      value={doi}
                      className="form-control"
                      onChange={(e) => setDoi(e.target.value)}
                    />
                  </div>
                  <h1>Eligibility Criteria</h1>

                  <div className="form-group">
                    <label htmlFor="tenthPercentage">10th Percentage</label>
                    <input
                      type="number"
                      id="tenthPercentage"
                      className="form-control"
                      placeholder="10th Percentage"
                      step="0.01"
                      value={tenthPercentage}
                      onChange={(e) => setTenthPercentage(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="twelfthPercentage">12th Percentage</label>
                    <input
                      type="number"
                      id="twelfthPercentage"
                      className="form-control"
                      placeholder="12th Percentage"
                      step="0.01"
                      value={twelfthPercentage}
                      onChange={(e) => setTwelfthPercentage(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="graduationCGPA">Graduation CGPA</label>
                    <input
                      type="number"
                      id="graduationCGPA"
                      className="form-control"
                      placeholder="Graduation CGPA"
                      step="0.01"
                      value={graduationCGPA}
                      onChange={(e) => setGraduationCGPA(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sixthSemesterCGPA">6th Semester CGPA</label>
                    <input
                      type="number"
                      id="sixthSemesterCGPA"
                      className="form-control"
                      value={sixthSemesterCGPA}
                      placeholder="6th Semester CGPA"
                      step="0.01"
                      onChange={(e) => setSixthSemesterCGPA(e.target.value)}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpdateCompany;
