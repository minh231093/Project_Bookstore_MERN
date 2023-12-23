import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contacts/AuthProvider";

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   const handleSignup = async (e) => {
//     try {
//       e.preventDefault();
//       const form = e.target;
//       const username = form.username.value;
//       const password = form.password.value;

//       const userObj = { username, password };

//       fetch("http://localhost:5000/account/signup", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(userObj),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           alert("Đăng ký thành công");
//           const token = data.token;
//           localStorage.setItem('token', token);
//           navigate("/");
//         })
//         .catch((error) => {
//           console.error("Error during fetch:", error);
//         });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

const SignUp = () => {
  const { createUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      // Gọi hàm createUser từ context thay vì sử dụng fetch
      await createUser(username, password);
      
      // Đăng ký thành công, chuyển hướng đến trang chính
      navigate("/");
    } catch (error) {
      // Xử lý lỗi đăng ký
      console.error('Đăng ký thất bại:', error);
    }
  };

  return (
    <div className="mt-16">
      <h2 className="py-8 text-5xl font-bold text-center md:text-center">
        Đăng ký tại đây
      </h2>

      <form onSubmit={handleSignup}>
        <input type="email" value={username} id="username" placeholder="Tài khoản" onChange={(e) => setUsername(e.target.value)} name="username"/>
        <input type="password" value={password} id="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} name="password"/>
        <button>Signup</button>
      </form>

      <div>
        <h2 className="text-center">
          Chưa có tài khoản?{" "}
          <Link to="/account/signup" className="text-red-400">
            Đăng ký ngay
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
