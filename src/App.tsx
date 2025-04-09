// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Riwayat from './pages/RiwayatPeminjaman';
import Profil from './pages/ProfilUser';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GedungPage from './pages/GedungPage';

const AppContent = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/register' || location.pathname === '/login';

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:gedungId" element={<GedungPage />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => { 
  return <AppContent />;
};

export default App;