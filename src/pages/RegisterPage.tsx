import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const RegisterPage = () => {
  const [userType, setUserType] = useState<'civitas' | 'umum'>('civitas');
  const [fade, setFade] = useState(false);

  const handleUserTypeChange = (type: 'civitas' | 'umum') => {
    setUserType(type);
  };

  // Remove body padding-top when RegisterPage is mounted
  useEffect(() => {
    document.body.classList.add('no-body-padding');
    return () => {
      document.body.classList.remove('no-body-padding');
    };
  }, []);

  
  return (
    <div className="row min-vh-100 w-100 g-0">
      {/* Left Section */}
      <div className="col-md-4 d-flex flex-column position-relative text-white bg-purple px-5 py-4">
        <img
          src="../assets/img/logounsrat.png"
          alt="Logo UNSRAT"
          className="position-absolute top-0 start-0 m-4"
          style={{ width: '80px' }}
        />
        <div className="d-flex flex-column justify-content-center align-items-start flex-grow-1 text-start px-4 w-100">
          <h1 className="fw-bold">Welcome to <br /> RoomTech</h1>
          <p className="mt-2">
          RoomTech memudahkan semua orang untuk memesan ruangan secara praktis, cepat, dan transparan.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-md-8 d-flex flex-column bg-light justify-content-center px-5 py-4">
        <h2 className="fw-bold mb-3">Register</h2>

        <div className="d-flex mb-3 border-bottom pb-2">
            <div
                className={`me-4 fw-semibold cursor-pointer user-tab ${userType === 'civitas' ? '' : 'user-tab-inactive'}`}
                onClick={() => handleUserTypeChange('civitas')}>
                <i className="bi bi-mortarboard-fill me-1 fs-5" />
                Civitas Unsrat
            </div>
            <div
                className={`fw-semibold cursor-pointer user-tab ${userType === 'umum' ? '' : 'user-tab-inactive'}`}
                onClick={() => handleUserTypeChange('umum')}>
                <i className="bi bi-person-fill me-1 fs-5" />
                Umum
            </div>
        </div>



        <form>
          <div className="mb-3">
            <label>Nama Lengkap</label>
            <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
          </div>

          <div className={`user-type-fields overflow-hidden ${fade ? 'fade' : ''}`}>
            {userType === 'civitas' && (
                <>
                <div className="mb-3">
                    <label>NIM/NIP</label>
                    <input type="text" className="form-control" placeholder="Masukkan NIM/NIP" />
                </div>
                <div className="mb-3">
                    <label>Alamat Email (UNSRAT)</label>
                    <input type="email" className="form-control" placeholder="Masukkan alamat email UNSRAT" />
                </div>
                </>
            )}

            {userType === 'umum' && (
                <div className="mb-3">
                <label>Alamat Email</label>
                <input type="email" className="form-control" placeholder="Masukkan alamat email" />
                </div>
            )}
            </div>


          <div className="mb-3">
            <label>Kata Sandi</label>
            <input type="password" className="form-control" placeholder="Masukkan kata sandi" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Ingat Saya</label>
          </div>

          <button type="submit" className="btn btn-purple w-100">Daftar</button>
          <div className="text-end mt-2">
            <a href="#">Lupa kata sandi?</a>
          </div>
          <div className="mt-5 text-center">
            Sudah punya akun? <a href="/login">Masuk</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;