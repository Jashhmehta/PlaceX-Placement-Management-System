import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, deleteCompany } from "../../../redux/companySlice.jsx";
import AdminHome from "../AdminHome.js";
import Footer from "../AdminReusableComponents/AdminFooter.js";
import interviewimg from '../Assets/company.png'
import "../Admin-CSS/Companycrud.css";
function Companycrud() {

  const navigate=useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/");
      }
    });
  }, []);
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/auth/deletecompany/" + id)
      .then((res) => {
        dispatch(deleteCompany({ id }));
      })
      .catch((err) => console.log(err));
  };

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
    <AdminHome />
<h2 className="header-title">Companies</h2> {/* Add custom class */}
<div className="container-fluid h-100">
  <div className="row h-100 justify-content-center align-items-start"> {/* Adjust align-items to start */}
    {/* Image column */}
    <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{ height: 'fit-content' }}> {/* Change height to fit-content */}
      <img src={interviewimg} alt="Your Image" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>

    {/* Table column */}
    <div className="col-lg-8 d-flex justify-content-center align-items-center custom-border"> {/* Add custom-border class */}
      <div className="bg-white rounded p-4">
        <Link to="/add-companies" className="btn btn-success btn-sm mb-3 btn-add">
          Add +
        </Link>
        <table className="table table-bordered table-hover">
          {/* Table headers */}
          <thead className="bg-purple text-white">
            <tr>
              <th>Name</th>
              <th>Profile</th>
              <th>Package</th>
              <th>Interview Date</th>
              <th>Branch</th>
              <th>10th %</th>
              <th>12th %</th>
              <th>Graduation CGPA</th>
              <th>6th Semester CGPA</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
          {companies.map((company) => {
              return (
                <tr>
                  <td>{company.companyname}</td>
                  <td>{company.jobprofile}</td>
                  <td>{company.ctc}</td>
                  <td>{company.doi}</td>
                  <td>
                    {company.eligibilityCriteria
                      ? company.eligibilityCriteria.join(", ")
                      : ""}
                  </td>
                  <td>{company.tenthPercentage}</td>
                  <td>{company.twelfthPercentage}</td>
                  <td>{company.graduationCGPA}</td>
                  <td>{company.sixthSemesterCGPA}</td>
                  <td>
                    <Link
                      to={`/updatecompany/${company.id}`}
                      className="btn btn-sm btn-success"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(company.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<Footer />

    </>
  );
}

export default Companycrud;
