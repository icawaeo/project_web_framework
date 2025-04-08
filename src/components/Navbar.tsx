import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // pastikan path ini sesuai struktur proyekmu
import logo from "../assets/img/roomtech2.png";

const Navbar: React.FC = () => {
  const location = useLocation();

  const user = {
    name: "Olivia Rhye",
    email: "olivia@untitled.edu",
    avatar: "https://ui-avatars.com/api/?name=Olivia+Rhye",
  };

  const isActive = (path: string) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="custom-navbar">
      <div className="container-navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="RoomTech Logo" />
        </div>

        {/* Navigation */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/")}>
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/riwayat" className={isActive("/riwayat")}>
              Riwayat Peminjaman
            </Link>
          </li>
        </ul>

        {/* Profile */}
        <div className="profile">
          <img className="avatar" src={user.avatar} alt="User Avatar" />
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
          <span className="status-dot"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
