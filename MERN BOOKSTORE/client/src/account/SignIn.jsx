import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contacts/AuthProvider";

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const username = form.username.value;
//     const password = form.password.value;

//     const userObj = { username, password };

//     try {
//       const response = await fetch('http://localhost:5000/account/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userObj),
//       });

//       if (response.ok) {
//         alert('Đăng nhập thành công');
//         navigate("/");
//       } else {
//         // Xử lý lỗi đăng nhập
//         console.error('Đăng nhập thất bại');
//       }
//     } catch (error) {
//       console.error('Error during fetch:', error);
//     }
//   };

const SignIn = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Gọi hàm login từ context thay vì sử dụng fetch
      await login(username, password);
      
      // Đăng nhập thành công, chuyển hướng đến trang chính
      navigate("/");
    } catch (error) {
      // Xử lý lỗi đăng nhập
      console.error('Đăng nhập thất bại:', error);
    }
  };

  return (
    <div className="mt-16">
      <h2 className="py-8 text-5xl font-bold text-center md:text-center">
        Đăng nhập tại đây
      </h2>

      <form onSubmit={handleLogin}>
        <input type="email" value={username} id="username" placeholder="Tài khoản" onChange={(e) => setUsername(e.target.value)} name="username" />
        <input type="password" value={password} id="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} name="password" />
        <button>Đăng nhập ngay</button>
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

export default SignIn;
