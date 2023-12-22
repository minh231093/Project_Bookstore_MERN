import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import TopBack from "./components/backToTop";
import AuthProvider from "./contacts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <TopBack />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
