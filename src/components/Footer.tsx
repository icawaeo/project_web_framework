import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light text-center py-3">
      <div className="container">
        <div className="social-icons mb-2">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-people"></i>
          <i className="bi bi-youtube"></i>
        </div>
        <p>Copyright ©2025 by RoomTech</p>
      </div>
    </footer>
  );
};

export default Footer;
