// src/pages/LoginPage.jsx

import React from "react";
import "./LoginPage.css"; // untuk custom style (warna ungu, dsb)
import logo from "../assets/img/logounsrat.png"; // sesuaikan dengan lokasi logo kamu

const LoginPage = () => {
  return (
    <div className="d-flex vh-100">
      {/* Left side */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 bg-purple text-white position-relative">
        <img
          src="../assets/img/logounsrat.png"
          alt="Logo UNSRAT"
          className="position-absolute top-0 start-0 m-4"
          style={{ width: '80px' }}
        />
        <div className="mt-auto mb-5">
          <h1 className="fw-bold">Welcome to <br /> RoomTech</h1>
          <p className="mt-3" style={{ maxWidth: '400px' }}>
            RoomTech memudahkan semua orang untuk memesan ruangan secara praktis, cepat, dan transparan.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className="w-75">
          <h2 className="mb-4 fw-bold">Welcome back!</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="text-decoration-none text-primary">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary w-100">Log in</button>
          </form>
          <p className="mt-4 text-center">
            Don’t have an account? <a href="/register" className="text-decoration-none text-primary">Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
