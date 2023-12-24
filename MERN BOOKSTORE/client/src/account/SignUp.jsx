import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contacts/AuthProvider";
//linh
//import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      // Gọi hàm createUser từ context thay vì sử dụng fetch
      let { data } = await createUser(username, password, userNickname);
      localStorage.setItem("user", data.userNickname);

      // Đăng ký thành công, chuyển hướng đến trang chính
      navigate("/");
    } catch (error) {
      // Xử lý lỗi đăng ký
      console.error("Đăng ký thất bại:", error);
    }
  };

  return (
    // <div className="mt-16">
    //   <h2 className="py-8 text-5xl font-bold text-center md:text-center">
    //     Đăng ký tại đây
    //   </h2>

    //   <form onSubmit={handleSignup}>
    //     <input type="email" value={username} id="username" placeholder="Tài khoản" onChange={(e) => setUsername(e.target.value)} name="username"/>
    //     <input type="password" value={password} id="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} name="password"/>
    //     <button>Signup</button>
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
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <form onSubmit={handleSignup}>
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    value={userNickname}
                    placeholder="Nick name"
                    onChange={(e) => setUserNickname(e.target.value)}
                    name="userNickname"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    value={username}
                    placeholder="Tài khoản"
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    value={password}
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>

                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn className="mb-4" size="lg">
                  Register
                </MDBBtn>
              </form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SignUp;
