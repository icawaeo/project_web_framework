// src/pages/Home.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../components/Navbar';
import { ruangDipakaiList } from '../data/dataRuanganDipakai';

const gedungData = [
  { nama: 'Gedung Teknik Sipil', img: require('../assets/img/gedungsipil2.jpeg') },
  { nama: 'Gedung Teknik Elektro', img: require('../assets/img/jteimg.jpg') },
  { nama: 'Gedung Dekanat', img: require('../assets/img/dekanatimg.jpg') },
  { nama: 'Laboratorium Fakultas Teknik', img: require('../assets/img/labimg.jpeg') },
  { nama: 'UPT TIK', img: require('../assets/img/ptiimg.jpeg') },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">

      <header className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Selamat Datang, User!</h1>
            <p className="hero-subtitle">Pinjam ruangan dengan mudah dan cepat</p>

            <div className="schedule-box">
              <h5 className="schedule-title">Jadwal Peminjaman</h5>
              <div className="schedule-details">
                <div>
                  <p className="schedule-label">Nama ruangan</p>
                  <p className="schedule-value">Creative Room</p>
                </div>
                <div>
                  <p className="schedule-label">Hari/Tanggal</p>
                  <p className="schedule-value">Jumat, 21 April 2025</p>
                </div>
                <div>
                  <p className="schedule-label">Waktu Peminjaman</p>
                  <p className="schedule-value">08.00 - 12.00</p>
                </div>
                <div className="search-box">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="cards-section container mt-5">
        <div className="row g-4">
          {gedungData.map((gedung, index) => (
            <div className="col-12 col-sm-6 col-md-4 d-flex" key={index}>
              <div className="card room-card shadow-sm h-100 w-100 d-flex flex-column">
                <div className="image-container">
                  <img src={gedung.img} className="card-img-top" alt={gedung.nama} />
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="text-muted small">Design</p>
                  <h5 className="card-title">{gedung.nama}</h5>
                  <p className="card-text small flex-grow-1">
                    How do you create compelling presentations that wow your colleagues?
                  </p>
                  <a href="#" className="btn btn-link p-0 small d-block text-end mt-auto">
                    Lihat selengkapnya ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">Load more</button>
        </div>
      </section>

      <section className="map-section container mt-5 mb-5">
        <img src={require('../assets/img/map_gedung_fatek.png')} alt="Campus Map" className="img-fluid shadow" />
      </section>
    </div>
  );
};

export default Home;
