import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import "./Login-CSS/login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }

    const userData = { email, password };
    axios
      .post("http://localhost:3001/auth", userData)
      .then((result) => {        
        if (result.data === "Success") {
          navigate("/home");
        } else if (result.data === "Password Incorrect") {
          setErrorMessage("Incorrect Password");
        } else if (result.data === "Admin") {
          navigate("/admin");
        } else {
          setErrorMessage("Invalid User");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container1">
      <h1>Login to Portal</h1>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <button className="register-btn" onClick={() => navigate("/register")}>
        Register
      </button>
      <button
        className="register-btn"
        onClick={() => navigate("/forgotpassword")}
      >
        Forgot Password
      </button>
    </div>
  );
}

export default Login;
