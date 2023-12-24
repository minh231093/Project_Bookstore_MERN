import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contacts/AuthProvider";

//linh
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Gọi hàm login từ context thay vì sử dụng fetch
      let { data } = await login(username, password);
      localStorage.setItem("user", data.userNickname);
      // Đăng nhập thành công, chuyển hướng đến trang chính
      navigate("/");
    } catch (error) {
      // Xử lý lỗi đăng nhập
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return (
    // <div className="mt-16">
    //   <h2 className="py-8 text-5xl font-bold text-center md:text-center">
    //     Đăng nhập tại đây
    //   </h2>

    //   <form onSubmit={handleLogin}>
    //     <input type="email" value={username} id="username" placeholder="Tài khoản" onChange={(e) => setUsername(e.target.value)} name="username" />
    //     <input type="password" value={password} id="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} name="password" />
    //     <button>Đăng nhập ngay</button>
    //   </form>

    //   <div>
    //     <h2 className="text-center">
    //       Chưa có tài khoản?{" "}
    //       <Link to="/account/signup" className="text-red-400">
    //         Đăng ký ngay
    //       </Link>
    //     </h2>
    //   </div>
    // </div>

    //linh
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <form onSubmit={handleLogin}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              value={username}
              placeholder="Tài khoản"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Bạn chưa có tài khoản?{" "}
                {/* <a
                  href="http://localhost:5173/Register"
                  className="link-danger"
                >
                  Register
                </a> */}
                <Link to="/account/signup" className="text-red-400">
                  ** Đăng ký ngay **{" "}
                </Link>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
};

export default SignIn;
