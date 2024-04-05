import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import AdminHome from "../AdminHomeComponents/AdminHome.js";
import Home from "./AdminHomeComponents/Home.js";
import About from "./AdminHomeComponents/About.js";
import Work from "./AdminHomeComponents/Work.js";
import Footer from "./AdminReusableComponents/AdminFooter.js";

function Admin() {
  return (
 
    <>
      <Home />
      <About />
      <Work />
      <Footer />
    </>
    

  )
}


export default Admin
