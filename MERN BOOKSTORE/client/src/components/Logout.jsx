import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const {logout} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";  

  const handleLogout = () => {
    logout().then(() => {
      // Sign-out successful.
      alert("Đăng xuất thành công!");
      navigate(from, {replace: true});
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      <button className='bg-amber-800 text-white rounded-md px-8' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout