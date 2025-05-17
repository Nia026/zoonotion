import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Artikel.css';
import { FiArrowRight } from 'react-icons/fi';

function Artikel(){
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data daftar artikel dari database
    const defaultArticleList = [
      {
        id: 1,
        title: 'Musang Pandan: Ciri-ciri, Karakteristik dan Fakta Menariknya',
        description: 'Pernah dengar tentang musang pandan? Binatang yang satu ini mungkin masih jarang terdengar, namun ternyata hewan ini punya ciri-ciri dan karakteristik unik yang bikin kamu penasaran. Dengan tubuh yang ramping dan bulu yang khas, hewan yang satu ini memiliki banyak fakta menarik yang nggak kalah seru untuk dibahas. Kalau kamu ingin tahu lebih dalam tentang musang pandan, mulai dari penampilannya sampai kebiasaan hidupnya, yuk simak artikel ini!',
        imageUrl: 'https://placehold.co/318x185', // Placeholder gambar
      },
      {
        id: 2,
        title: 'Kucing Siam: Mengenal si Kucing Pintar yang Menggemaskan!',
        description: 'Kucing siam atau siamese merupakan salah satu ras kucing hias yang umum dipelihara di seluruh dunia. Kucing yang memiliki perawakan layaknya kucing domestik ini dinamakan siam karena berasal dari Negara Siam yang sekarang lebih dikenal dengan nama Thailand.',
        imageUrl: 'https://placehold.co/318x185', // Placeholder gambar
      },
      {
        id: 3,
        title: 'Kenali 100 Nama Hewan di Indonesia yang Menakjubkan!',
        description: 'Tahukah kamu? Indonesia dikenal sebagai salah satu negara yang kaya akan sumber daya hayati terbesar di dunia. Mulai dari mamalia megah seperti harimau Sumatra sampai serangga kumbang tanduk, masing-masing daerah di negara ini punya kekayaan fauna yang luar biasa.',
        imageUrl: 'https://placehold.co/318x185', // Placeholder gambar
      },
      {
        id: 4,
        title: 'Inilah 8 Spesies Ular Terbesar di Dunia, Salah Satunya Ada Black Mamba',
        description: 'Tak jarang berita tentang penemuan ular besar di sekitar kawasan rumah warga beredar, penemuan ular besar ini tentunya menghebohkan karena masyarakat khawatir bahwa ular tersebut dapat membahayakan manusia maupun hewan peliharaan. Di Indonesia, ular paling besar adalah Anaconda Hijau dengan panjang mencapai 9,7 m dan berat lebih dari 249 kg! Tetapi selain Anaconda Hijau, ada beberapa spesies ular terbesar lain di dunia lho!',
        imageUrl: 'https://placehold.co/318x185', // Placeholder gambar
      },
    ];
    setArticleList(defaultArticleList);
  }, []);

  return (
    <div className="article-page">
      <div className="article-banner-container">
        <img src="/assets/bannerKupu.png" alt="Halaman Artikel" className="article-banner-image" />
        <h2 className="article-banner-text">Halaman Artikel</h2>
      </div>

      <Container className="py-5">
        <h2 className="text-center mb-4 section-title">Daftar Artikel</h2>
        <Row className="justify-content-center">
          {articleList.length > 0 ? (
            articleList.map((article) => (
              <Col md={6} className="mb-4" key={article.id}>
                <Card className="article-card bg-green-dark text-white shadow">
                  <Card.Img variant="top" src={article.imageUrl} alt={article.title} className="article-image" />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center mb-3">{article.title}</Card.Title>
                    <Card.Text className="text-center mb-3">{article.description.substring(0, 150)}...</Card.Text> {/* Tampilkan sebagian deskripsi */}
                    <Button
                      variant="outline-light"
                      size="sm"
                      as="a"
                      href="#"
                      className="custom-button read-more-button"
                    >
                      Lihat Selengkapnya <FiArrowRight className="arrow-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col md={12}>
              <p className="text-center">Artikel belum tersedia.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Artikel