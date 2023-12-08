// import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
// import Shop from "./shop/Shop";
// import SingleBook from "./shop/SingleBook";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
