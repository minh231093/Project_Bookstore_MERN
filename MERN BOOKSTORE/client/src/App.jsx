import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import TopBack from "./components/backToTop";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />

      <TopBack />
    </>
  );
}

export default App;
