import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Artikel.css'; 
import { FiArrowRight } from 'react-icons/fi';

function Artikel(){
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const defaultArticleList = [
      {
        id: 1,
        title: 'Musang Pandan: Ciri-ciri, Karakteristik dan Fakta Menariknya',
        description: 'Pernah dengar tentang musang pandan? Binatang yang satu ini mungkin masih jarang terdengar, namun ternyata hewan ini punya ciri-ciri dan karakteristik unik yang bikin kamu penasaran. Dengan tubuh yang ramping dan bulu yang khas, hewan yang satu ini memiliki banyak fakta menarik yang nggak kalah seru untuk dibahas. Kalau kamu ingin tahu lebih dalam tentang musang pandan, mulai dari penampilannya sampai kebiasaan hidupnya, yuk simak artikel ini!',
        imageUrl: '/assets/gambarMusang.webp',
        author: 'Laila', 
        publishDate: '2025',
        bannerImage: '/assets/bannerKupu.png',
        fullDescription: `Pernah dengar tentang musang pandan? Binatang yang satu ini mungkin masih jarang terdengar, namun ternyata hewan ini punya ciri-ciri dan karakteristik unik yang bikin kamu penasaran. Dengan tubuh yang ramping dan bulu yang khas, hewan yang satu ini memiliki banyak fakta menarik yang nggak kalah seru untuk dibahas. Kalau kamu ingin tahu lebih dalam tentang musang pandan, mulai dari penampilannya sampai kebiasaan hidupnya, yuk simak artikel ini!

        Musang pandan (Paradoxurus hermaphroditus) adalah salah satu spesies musang yang berasal dari kawasan Asia Tenggara. Hewan ini bisa ditemukan di berbagai negara, termasuk Indonesia. Musang pandan memiliki ciri-ciri fisik yang unik, seperti tubuh yang ramping, bulu berwarna cokelat keabu-abuan, dan ekor panjang bergaris. Musang pandan juga dikenal dengan aroma khasnya yang mirip dengan bau pandan, itulah mengapa dinamakan musang pandan.

        Di Indonesia, hewan ini dikenal dengan berbagai nama lokal, seperti "luwak pandan" atau "musang luwak". Mereka lebih sering ditemukan di daerah-daerah dengan iklim tropis dan keberadaan sungai yang mendukung habitatnya. Musang pandan adalah hewan nokturnal yang aktif mencari makan di malam hari. Mereka sering bersembunyi di pohon, lubang tanah, atau gua di siang hari.

        Berikut beberapa ciri-ciri musang pandan:
        1. Tubuh Ramping dan Panjang: Musang pandan memiliki tubuh yang ramping dengan panjang sekitar 40 hingga 60 cm (tidak termasuk ekor). Ekornya panjang, sekitar 30 hingga 50 cm, dan bergaris-garis hitam dan putih.
        2. Bulu Cokelat Keabu-abuan: Bulu musang pandan berwarna cokelat keabu-abuan dengan beberapa variasi warna, seperti cokelat muda atau cokelat tua. Beberapa musang pandan memiliki bercak-bercak gelap di bagian perut.
        3. Gigi Tajam dan Cakar Kuat: Musang pandan memiliki gigi yang tajam dan kuat, berguna untuk memakan buah-buahan, serangga, dan hewan kecil. Cakarnya yang kuat membantu mereka memanjat pohon dan berpegangan erat pada dahan.
        4. Bau Pandan: Musang pandan memiliki kelenjar bau yang mengeluarkan aroma khas pandan. Aroma ini digunakan untuk menandai wilayah dan berkomunikasi dengan sesama musang pandan.
        5. Karnivora dan Omnivora: Musang pandan adalah hewan omnivora yang memakan buah-buahan, serangga, telur, dan hewan kecil lainnya. Mereka sering mencari makan di sekitar pemukiman manusia, seperti kebun dan ladang.
        6. Hewan Nokturnal: Musang pandan adalah hewan nokturnal yang aktif di malam hari. Mereka bersembunyi di siang hari dan keluar mencari makan di malam hari.
        7. Pemanjat Pohon: Musang pandan adalah pemanjat pohon yang ulung. Mereka sering bersembunyi di pohon dan menggunakan ekornya untuk menjaga keseimbangan.

        Fakta Menarik tentang Musang Pandan:
        1. Kopi Luwak: Musang pandan dikenal sebagai produsen kopi luwak. Mereka memakan biji kopi, yang kemudian difermentasi di dalam saluran pencernaan mereka. Biji kopi yang telah melewati pencernaan musang pandan dianggap memiliki cita rasa yang unik dan mahal.
        2. Peran Ekologis: Musang pandan memiliki peran penting dalam ekosistem sebagai penyebar biji tumbuhan. Mereka membantu menyebarkan biji buah-buahan yang mereka makan, sehingga membantu menjaga keseimbangan alam.
        3. Populasi: Musang pandan dapat ditemukan di berbagai habitat, seperti hutan, perkebunan, dan daerah perkotaan. Mereka beradaptasi dengan baik di berbagai lingkungan dan populasinya cukup stabil.

        Itulah beberapa informasi menarik tentang musang pandan. Hewan ini memiliki ciri-ciri unik dan berperan penting dalam ekosistem. Jika Anda tertarik untuk mempelajari lebih lanjut tentang musang pandan, kunjungi kebun binatang terdekat atau cari informasi lebih lanjut di internet.
        `,
      },
      {
        id: 2,
        title: 'Kucing Siam: Mengenal si Kucing Pintar yang Menggemaskan!',
        description: 'Kucing siam atau siamese merupakan salah satu ras kucing hias yang umum dipelihara di seluruh dunia. Kucing yang memiliki perawakan layaknya kucing domestik ini dinamakan siam karena berasal dari Negara Siam yang sekarang lebih dikenal dengan nama Thailand.',
        imageUrl: '/assets/gambarKucing.webp',
        author: 'Tim Unotopia',
        publishDate: '2024',
        bannerImage: '/assets/bannerKupu.png',
        fullDescription: `Kucing siam atau siamese merupakan salah satu ras kucing hias yang umum dipelihara di seluruh dunia. Kucing yang memiliki perawakan layaknya kucing domestik ini dinamakan siam karena berasal dari Negara Siam yang sekarang lebih dikenal dengan nama Thailand.

        Kucing siam dikenal dengan ciri khasnya yang elegan, dengan tubuh ramping, kaki panjang, dan ekor yang tipis. Mereka memiliki mata biru yang cerah dan bulu yang berwarna terang di tubuh, dengan bagian ujung tubuh (seperti telinga, wajah, kaki, dan ekor) yang lebih gelap. Warna gelap ini disebabkan oleh gen yang sensitif terhadap suhu, yang menyebabkan bulu menjadi lebih gelap di bagian tubuh yang lebih dingin.

        Kucing siam sangat aktif, cerdas, dan penuh rasa ingin tahu. Mereka senang bermain, melompat, dan menjelajahi lingkungan. Kucing siam juga dikenal sebagai kucing yang sangat vokal dan komunikatif. Mereka sering mengeluarkan suara-suara khas seperti "meong" yang nyaring untuk menarik perhatian pemiliknya.

        Berikut beberapa fakta menarik tentang kucing siam:
        1. Berasal dari Thailand: Kucing siam pertama kali ditemukan di Thailand (dulu Siam) pada abad ke-18. Mereka dulunya adalah kucing istana yang dipelihara oleh bangsawan Thailand.
        2. Kucing Vokal: Kucing siam sangat vokal dan sering mengeluarkan suara-suara yang mirip dengan tangisan bayi. Mereka sering berbicara dengan pemiliknya dan menuntut perhatian.
        3. Cerdas dan Lincah: Kucing siam sangat cerdas dan mudah dilatih. Mereka juga sangat lincah dan senang bermain.
        4. Bulu Sensitif Suhu: Warna bulu kucing siam dapat berubah seiring dengan suhu tubuh mereka. Bulu di bagian tubuh yang lebih dingin akan menjadi lebih gelap.
        5. Kesehatan: Kucing siam umumnya sehat, tetapi mereka rentan terhadap beberapa masalah kesehatan, seperti masalah mata dan masalah pernapasan.

        Jika Anda tertarik untuk memelihara kucing siam, pastikan Anda siap untuk memberikan perhatian yang cukup dan merawat mereka dengan baik. Kucing siam adalah teman yang setia dan menggemaskan.
        `,
      },
      {
        id: 3,
        title: 'Kenali 100 Nama Hewan di Indonesia yang Menakjubkan!',
        description: 'Tahukah kamu? Indonesia dikenal sebagai salah satu negara yang kaya akan sumber daya hayati terbesar di dunia. Mulai dari mamalia megah seperti harimau Sumatra sampai serangga kumbang tanduk, masing-masing daerah di negara ini punya kekayaan fauna yang luar biasa.',
        imageUrl: '/assets/gambarSinga.png',
        author: 'Tim Unotopia',
        publishDate: '2024',
        bannerImage: '/assets/bannerKupu.png',
        fullDescription: `Tahukah kamu? Indonesia dikenal sebagai salah satu negara yang kaya akan sumber daya hayati terbesar di dunia. Mulai dari mamalia megah seperti harimau Sumatra sampai serangga kumbang tanduk, masing-masing daerah di negara ini punya kekayaan fauna yang luar biasa.

        Indonesia adalah rumah bagi lebih dari 1.500 spesies burung, 500 spesies mamalia, 1.000 spesies reptil, dan ribuan spesies ikan dan serangga. Keanekaragaman hayati ini menjadikannya salah satu negara dengan keanekaragaman hayati terkaya di dunia.

        Beberapa nama hewan yang unik dan menakjubkan di Indonesia:
        1. Harimau Sumatra: Subspesies harimau yang hanya ditemukan di pulau Sumatra. Harimau Sumatra adalah predator puncak di hutan hujan Sumatra.
        2. Orangutan Kalimantan: Primata besar yang ditemukan di hutan hujan Kalimantan. Orangutan Kalimantan adalah spesies yang terancam punah.
        3. Komodo: Kadal terbesar di dunia yang hanya ditemukan di pulau Komodo, Rinca, Flores, Gili Motang, dan Gili Dasami. Komodo adalah predator yang kuat dan berbahaya.
        4. Badak Jawa: Spesies badak yang sangat langka dan hanya ditemukan di Taman Nasional Ujung Kulon, Jawa. Badak Jawa adalah salah satu mamalia paling terancam punah di dunia.
        5. Burung Cendrawasih: Burung yang dikenal dengan bulu-bulu yang indah dan warna-warni. Burung Cendrawasih banyak ditemukan di Papua.
        6. Bekantan: Monyet hidung panjang yang hanya ditemukan di hutan bakau Kalimantan. Bekantan adalah spesies yang terancam punah.
        7. Jalak Bali: Burung endemik Bali yang dikenal dengan bulu putih bersih dan jambul hitamnya. Jalak Bali adalah spesies yang terancam punah.
        8. Penyu Belimbing: Penyu laut terbesar di dunia yang ditemukan di perairan tropis. Penyu belimbing adalah spesies yang terancam punah.

        Selain itu, masih banyak lagi hewan-hewan lain yang menakjubkan di Indonesia, seperti anoa, babi rusa, tarsius, dan berbagai jenis ikan dan serangga. Keanekaragaman hayati ini perlu kita jaga dan lestarikan agar tidak punah.

        Mari kita bersama-sama menjaga kelestarian hewan-hewan di Indonesia dengan cara mendukung upaya konservasi, tidak membeli produk-produk yang terbuat dari hewan langka, dan melaporkan tindakan-tindakan ilegal yang mengancam keberadaan hewan.
        `,
      },
      {
        id: 4,
        title: 'Inilah 8 Spesies Ular Terbesar di Dunia, Salah Satunya Ada Black Mamba',
        description: 'Tak jarang berita tentang penemuan ular besar di sekitar kawasan rumah warga beredar, penemuan ular besar ini tentunya menghebohkan karena masyarakat khawatir bahwa ular tersebut dapat membahayakan manusia maupun hewan peliharaan. Di Indonesia, ular paling besar adalah Anaconda Hijau dengan panjang mencapai 9,7 m dan berat lebih dari 249 kg! Tetapi selain Anaconda Hijau, ada beberapa spesies ular terbesar lain di dunia lho!',
        imageUrl: '/assets/gambarUlar.webp',
        author: 'Tim Unotopia',
        publishDate: '2024',
        bannerImage: '/assets/bannerKupu.png',
        fullDescription: `Tak jarang berita tentang penemuan ular besar di sekitar kawasan rumah warga beredar, penemuan ular besar ini tentunya menghebohkan karena masyarakat khawatir bahwa ular tersebut dapat membahayakan manusia maupun hewan peliharaan. Di Indonesia, ular paling besar adalah Anaconda Hijau dengan panjang mencapai 9,7 m dan berat lebih dari 249 kg! Tetapi selain Anaconda Hijau, ada beberapa spesies ular terbesar lain di dunia lho!

        Ular adalah reptil yang menakutkan bagi sebagian orang, tetapi mereka juga merupakan bagian penting dari ekosistem. Ular terbesar di dunia memiliki ukuran yang mengesankan dan dapat menjadi predator yang sangat kuat.

        Berikut adalah 8 spesies ular terbesar di dunia:
        1. Anaconda Hijau (Eunectes murinus): Ular terbesar di dunia dalam hal massa dan diameter. Anaconda hijau dapat mencapai panjang hingga 9,7 meter dan berat lebih dari 249 kg. Mereka hidup di perairan Amerika Selatan.
        2. Sanca Batik (Malayopython reticulatus): Ular terpanjang di dunia, dengan panjang rata-rata 6,25 meter dan dapat mencapai 10 meter. Sanca batik ditemukan di Asia Tenggara.
        3. Python Burma (Python bivittatus): Ular besar yang berasal dari Asia Tenggara. Python burma dapat mencapai panjang hingga 5,74 meter.
        4. Boa Konstrikto (Boa constrictor): Ular non-berbisa yang ditemukan di Amerika Utara, Tengah, dan Selatan. Boa konstrikto dapat mencapai panjang hingga 3 meter.
        5. Cobra Raja (Ophiophagus hannah): Ular berbisa terpanjang di dunia, dengan panjang rata-rata 3 hingga 4 meter dan dapat mencapai 5,7 meter. Cobra raja ditemukan di Asia Selatan dan Tenggara.
        6. Black Mamba (Dendroaspis polylepis): Ular berbisa tercepat di dunia, dengan kecepatan hingga 20 km/jam. Black mamba ditemukan di Afrika.
        7. Anakonda Kuning (Eunectes notaeus): Ular yang lebih kecil dari anaconda hijau, tetapi masih sangat besar. Anakonda kuning ditemukan di Amerika Selatan.
        8. Ular Gajah (Acrochordus arafurae): Ular air yang ditemukan di Australia dan Papua Nugini. Ular gajah dapat mencapai panjang hingga 2,5 meter.

        Ular-ular ini memiliki peran penting dalam ekosistem sebagai predator dan pengontrol populasi hewan pengerat. Meskipun menakutkan, ular-ular ini juga perlu dilindungi karena keberadaan mereka penting bagi keseimbangan alam.
        `,
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
                    <Card.Text className="text-center mb-3">{article.description.substring(0, 150)}...</Card.Text>
                    <Button
                      variant="outline-light"
                      size="sm"
                      as={Link} 
                      to={`/detail-artikel/${article.id}`} 
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

export default Artikel;