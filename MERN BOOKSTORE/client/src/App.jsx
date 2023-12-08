import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import TopBack from "./components/backToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />

      <TopBack />

      <Footer />
    </>
  );
}

export default App;
