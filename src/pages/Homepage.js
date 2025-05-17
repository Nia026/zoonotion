import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Homepage.css';
import { Link } from "react-router-dom"; 

function Hompage() {
  return (
    <div className="home-page">
      <div className="banner-container">
        <img src="/assets/bannerPuffins.png" alt="Let's learn about puffins" className="banner-image" />
        {/* <div className="banner-text">let's learn about puffins</div>  */}
      </div>

      <Container className="mt-5 text-center">
        <h2 className="mb-4">Zoonotion</h2>
        <p className="lead">
          zoonotion adalah platform edukasi hewan yang menyajikan metode pembelajaran hewan yang menarik. ayooo teman teman mari kita bersama - sama mengenal berbagai macam satwa yang ada di alam yang luas ini 🙌
        </p>
        <hr className="my-4 w-50 mx-auto" />
      </Container>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={3} className="mb-4">
            <Link to="/education" className="d-block">
              <img src="/assets/gambarEdukasi.png" alt="Education" className="img-fluid rounded-circle shadow" />
              <h3 className="mt-2">Education</h3>
            </Link>
          </Col>
          <Col md={3} className="mb-4">
            <Link to="#" className="d-block">
              <img src="/assets/gambarQuizz.png" alt="Quiz" className="img-fluid rounded-circle shadow" />
              <h3 className="mt-2">Quizz</h3>
            </Link>
          </Col>
          <Col md={3} className="mb-4">
            <Link to="/community" className="d-block">
              <img src="/assets/gambarKomunitas.png" alt="Komunitas" className="img-fluid rounded-circle shadow" />
              <h3 className="mt-2">Komunitas</h3> 
            </Link>
          </Col>
          <Col md={3} className="mb-4">
            <Link to="/article" className="d-block">
              <img src="/assets/gambarArtikel.png" alt="Berita" className="img-fluid rounded-circle shadow" />
              <h3 className="mt-2">Artikel</h3>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <hr className="my-4 w-75 mx-auto" />
        <Row>
          <Col md={6} className="mb-4">
            <div className="vision-card bg-brown text-white rounded p-4 shadow">
              <h3>Visi Kami</h3>
              <p>Meningkatkan kesadaran dan kepedulian masyarakat terhadap kehidupan dan kesejahteraan hewan melalui pendidikan yang informatif, menyenangkan, dan bermakna.</p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="mission-card bg-green text-white rounded p-4 shadow">
              <h3>Misi Kami</h3>
              <ol>
                <li>Menyediakan materi edukatif tentang keanekaragaman, habitat, dan peran penting hewan dalam ekosistem.</li>
                <li>Mendorong sikap cinta, empati, dan tanggung jawab terhadap hewan sejak usia dini.</li>
                <li>Menyelenggarakan program edukatif interaktif seperti kunjungan ke tempat penangkaran, kebun binatang, atau pusat konservasi.</li>
                <li>Meningkatkan pemahaman masyarakat terhadap isu-isu seperti perlindungan satwa liar, konservasi, dan kesejahteraan hewan peliharaan.</li>
                <li>Berkolaborasi dengan sekolah, komunitas, dan lembaga terkait dalam kampanye edukasi hewan secara berkelanjutan.</li>
              </ol>
            </div>
          </Col>
        </Row>
        <hr className="my-4 w-75 mx-auto" />
        <div className="contact-card bg-green-dark text-white rounded p-4 shadow">
          <h3>Kontak Kami</h3>
          <p><i className="bi bi-envelope me-2"></i> zoonotion@gmail.com</p>
          <p><i className="bi bi-telephone-fill me-2"></i> +62 08****</p>
          <p><i className="bi bi-instagram me-2"></i> @zoonotion</p>
        </div>
      </Container>
    </div>
  );
}

export default Hompage