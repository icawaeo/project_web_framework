// src/pages/GedungPage.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './GedungPage.css';

const gedungData: { [key: string]: any } = {
  'teknik-sipil': {
    name: 'Gedung Teknik Sipil',
    fasilitas: ['WiFi', 'AC Central', 'Lift', 'Toilet Pria & Wanita', 'Stop Kontak', 'Tempat Parkir Luas'],
    ruangan: [
      {
        nama: 'Auditorium Sipil',
        kapasitas: 100,
        harga: 500000,
        fasilitasTambahan: [
          { nama: 'Mic Wireless', harga: 50000 },
          { nama: 'Proyektor', harga: 100000 },
        ],
      },
    ],
    image: 'images/gedungsipil2.jpeg',
  },

  'jte': {
    name: 'Gedung Teknik Elektro',
    fasilitas: ['WiFi', 'AC Central', 'Toilet Pria & Wanita', 'Tempat Parkir Luas'],
    ruangan: [
      {
        nama: 'Creative Room',
        kapasitas: 30,
        harga: 200000,
        fasilitasTambahan: [
          { nama: 'Whiteboard', harga: 20000 },
          { nama: 'Proyektor', harga: 100000 },
        ],
      },
      {
        nama: 'Ruang Sidang',
        kapasitas: 25,
        harga: 150000,
        fasilitasTambahan: [{ nama: 'Kamera', harga: 75000 }],
      },
    ],
    image: 'images/gedungjte2.jpeg',
  },

  'dekanat': {
    name: 'Gedung Dekanat',
    fasilitas: ['WiFi', 'AC Central', 'Toilet Pria & Wanita', 'Mini Pantry', 'Ruang Lobby', 'Stop Kontak', 'Tempat Parkir Luas'],
    ruangan: [
      {
        nama: 'Auditorium',
        kapasitas: 150,
        harga: 200000,
        fasilitasTambahan: [
          { nama: 'Mic Wireless', harga: 50000 },
          { nama: 'Lampu Tambahan', harga: 30000 },
        ],
      },
    ],
    image: 'images/gedungjte2.jpeg',
  },

  'gedung-lab': {
    name: 'Gedung Laboratorium',
    fasilitas: ['WiFi (+ koneksi LAN)', 'AC Central', 'Toilet Pria & Wanita', 'Mini Pantry', 'Stop Kontak'],
    ruangan: [
      {
        nama: 'Lab Tik & Siber',
        kapasitas: 20,
        harga: 300000,
        fasilitasTambahan: [{ nama: 'PC Tambahan', harga: 100000 }],
      },
      {
        nama: 'Lab Multimedia',
        kapasitas: 25,
        harga: 250000,
        fasilitasTambahan: [{ nama: 'Monitor Besar', harga: 80000 }],
      },
      {
        nama: 'Lab TBD',
        kapasitas: 30,
        harga: 200000,
        fasilitasTambahan: [],
      },
      {
        nama: 'Lab RPL',
        kapasitas: 15,
        harga: 150000,
        fasilitasTambahan: [],
      },
    ],
    image: 'images/labimg.jpeg',
  },

  'gedung-pti': {
    name: 'Gedung PTI',
    fasilitas: ['PTI-1', 'PTI-2', 'PTI-3'],
    ruangan: [
      {
        nama: 'PTI-1',
        kapasitas: 40,
        harga: 200000,
        fasilitasTambahan: [],
      },
      {
        nama: 'PTI-2',
        kapasitas: 35,
        harga: 180000,
        fasilitasTambahan: [],
      },
      {
        nama: 'PTI-3',
        kapasitas: 30,
        harga: 160000,
        fasilitasTambahan: [],
      },
    ],
    image: 'images/ptiimg.jpeg',
  },
};

const GedungPage: React.FC = () => {
  const { gedungId } = useParams();
  const gedung = gedungData[gedungId ?? ''];

  const [tanggal, setTanggal] = useState<string>('');
  const [jamMulai, setJamMulai] = useState<string>('09:00');
  const [jamSelesai, setJamSelesai] = useState<string>('17:00');
  const [fasilitasDipilih, setFasilitasDipilih] = useState<{ [key: string]: string[] }>({});

  const userType = localStorage.getItem('userType') || 'umum';

  const handleToggleFasilitas = (namaRuangan: string, namaFasilitas: string) => {
    setFasilitasDipilih((prev) => {
      const fasilitasSaatIni = prev[namaRuangan] || [];
      const sudahDipilih = fasilitasSaatIni.includes(namaFasilitas);

      return {
        ...prev,
        [namaRuangan]: sudahDipilih
          ? fasilitasSaatIni.filter((f) => f !== namaFasilitas)
          : [...fasilitasSaatIni, namaFasilitas],
      };
    });
  };

  if (!gedung) {
    return <div className="text-center mt-5">Gedung tidak ditemukan.</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-outline-ungu mb-4">← Kembali</Link>

      <div className="text-center">
        <img
          src={`/${gedung.image}`}
          alt={gedung.name}
          className="img-fluid rounded mb-4"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold">{gedung.name}</h2>
      </div>

      {/* Pilihan Tanggal & Jam */}
      <div className="rounded-4 bg-white shadow-sm p-3 my-4">
        <div className="d-flex flex-wrap border rounded-4 overflow-hidden">
          <div className="col-md-6 border-end p-3">
            <strong>Hari/Tanggal</strong>
            <div className="text-muted mt-1">
              {tanggal
                ? new Date(tanggal).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : 'Pilih tanggal'}
            </div>
            <input
              type="date"
              className="form-control mt-2"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>
          <div className="col-md-6 p-3">
            <strong>Waktu</strong>
            <div className="text-muted mt-1">{jamMulai} - {jamSelesai}</div>
            <div className="d-flex gap-2 mt-2">
              <input
                type="time"
                className="form-control"
                value={jamMulai}
                onChange={(e) => setJamMulai(e.target.value)}
              />
              <span className="align-self-center">s/d</span>
              <input
                type="time"
                className="form-control"
                value={jamSelesai}
                onChange={(e) => setJamSelesai(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-5 mb-3 fw-semibold">Fasilitas Gedung</h4>
      <div className="row">
        {gedung.fasilitas.map((fasilitas: string, index: number) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="border p-3 rounded text-center bg-light">
              <i className="bi bi-building me-2"></i> {fasilitas}
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-5 mb-3 fw-semibold">Ruangan</h4>
      <div className="row">
        {gedung.ruangan.map((room: any, idx: number) => (
          <div key={idx} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold">{room.nama}</h5>
                <p className="card-text">Kapasitas: {room.kapasitas} orang</p>
                <p className="card-text">Tersedia: {room.tersedia ?? '-'}</p>
                {userType === 'umum' && (
                  <>
                    <p className="card-text text-success fw-semibold">
                      Harga: Rp{room.harga.toLocaleString()}
                    </p>
                    <p className="card-text small text-muted">* Harga per 1 jam</p>

                    {room.fasilitasTambahan?.length > 0 && (
                      <div className="mt-3">
                        <p className="fw-semibold mb-1">Fasilitas Tambahan:</p>
                        <ul className="list-unstyled mb-0">
                          {room.fasilitasTambahan.map((item: any, i: number) => (
                            <li key={i} className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`${room.nama}-${item.nama}`}
                                checked={
                                  fasilitasDipilih[room.nama]?.includes(item.nama) || false
                                }
                                onChange={() =>
                                  handleToggleFasilitas(room.nama, item.nama)
                                }
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor={`${room.nama}-${item.nama}`}
                              >
                                {item.nama} - Rp{item.harga.toLocaleString()}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GedungPage;
