import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar'
import MyFooter from './components/MyFooter'
import TopBack from "./components/backToTop";
import AuthProvider from "./contacts/AuthProvider";

function App() {

  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <TopBack />
        <MyFooter />
      </div>
    </AuthProvider>
  );
}

export default App
