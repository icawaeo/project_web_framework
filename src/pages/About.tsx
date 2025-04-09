import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 about-page">
        <h2>About Us</h2>
        <p>
          Kelompok Mata Kuliah <strong>Pengembangan Aplikasi Web Berbasis Framework</strong>
        </p>
        <div className="team">
          <div className="member">
            <h5>Nama: Andi Santoso</h5>
            <p>NIM: 210123456</p>
            <p>IG: @andi.webdev</p>
            <p>Email: andi@example.com</p>
          </div>
          <div className="member">
            <h5>Nama: Budi Hartanto</h5>
            <p>NIM: 210123789</p>
            <p>IG: @budi.codes</p>
            <p>Email: budi@example.com</p>
          </div>
          <div className="member">
            <h5>Nama: Citra Lestari</h5>
            <p>NIM: 210124321</p>
            <p>IG: @citra.dev</p>
            <p>Email: citra@example.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
