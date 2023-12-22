import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mt-16">
      <h2 className="py-8 text-5xl font-bold text-center md:text-center">
        Đăng nhập tại đây
      </h2>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
        />
        <input type="submit" onClick={submit} />
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
