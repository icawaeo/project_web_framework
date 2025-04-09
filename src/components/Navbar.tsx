import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm">
      <div className="container">
      <Link className="navbar-brand fw-bold" to="/">
        <img
          src="/images/roomtech-fix.png"
          alt="RoomTech Logo"
          style={{ height: "40px", objectFit: "contain" }}
        />
      </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active fw-bold" : ""}`}
                to="/"
              >
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/riwayat-pinjam" ? "active fw-bold" : ""}`}
                to="/riwayat-pinjam"
              >
                Riwayat Peminjaman
              </Link>
            </li>
          </ul>
          <Link to="/login" className="custom-login-btn ms-lg-3 mt-2 mt-lg-0">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;