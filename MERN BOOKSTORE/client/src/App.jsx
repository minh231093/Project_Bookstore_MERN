// import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import TopBack from "./components/backToTop";

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <TopBack />
      <Footer />
    </div>
  );
}

export default App
