import React, { useState } from "react";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState(" ");
  const [pass, setPass] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <section>
        <div className="login-page-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="****"
              id="password"
              name="password"
            />
            <div class="form-check">
              <input type={"checkbox"} id="gridCheck1" />
              <label for="gridCheck1">Remember me?</label>
            </div>
            <button className="btnn" type="submit">
              Log In
            </button>
          </form>
          <p className="forgot-pass">Forgot Password?</p>
          <p className="a">OR</p>
          <button
            className="link-btn btnn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have an account? Register here.
          </button>
          <div className="col-12 col-lg-6 mx-auto">
            <div className="row">
              <div className="col-6 col-lg-3 mx-auto gl">
                <i class="uil uil-google"></i>
              </div>
              <div className="col-6 col-lg-3 mx-auto ln">
                <i class="uil uil-linkedin"></i>
              </div>
              <div className="col-6 col-lg-3 mx-auto fb">
                <i class="uil uil-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
