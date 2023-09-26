import React, { useState } from "react";
import "./login.css";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <section>
        <div className="login-page-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="full Name" />
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="DD/MM/YYYY"
              id="startDate"
              name="startDate"
            />
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
              placeholder="********"
              id="password"
              name="password"
            />
            <br />
            <button className="btnn" type="submit">
              SignUp
            </button>
          </form>
          <button
            className="link-btn btnn"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Login here.
          </button>
        </div>
      </section>
    </div>
  );
};

export default Register;
