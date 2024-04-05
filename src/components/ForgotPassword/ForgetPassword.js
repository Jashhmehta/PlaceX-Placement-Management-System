import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email };
    axios
      .post("http://localhost:3001/auth/forgotpassword", {
        email,
      })
      .then((response) => {
        if (response.data.status) {
          alert("Check your email for reset password link");
          navigate("/");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container1">
      <h1>Forgot Password</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default ForgetPassword;
