import React, {Component} from 'react'
import HomeArtikelTerbaru from './HomeArtikelTerbaru.js'
import { Link } from 'react-router-dom';

class HomeIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="main-banner-area-two">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container-fluid">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="main-banner-content">
                                            <h1 class="text-white">Linux Study Club</h1>
                                            <p class="text-white">LSC FIKOM UMI berfungsi sebagai wadah pengembangan
                                                kemampuan mahasiswa di bidang teknologi terkhususnya pada pemanfaatan dan
                                                pengembangan Teknologi Free Open Source Software.</p>
                                            <div class="banner-btn">
                                                <Link to="/pendafataran" class="btn-outline-dark btn">Bergabung Dengan Kami</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="banner-image">
                                            <img
                                                src="assets/img/home-two/1.png"
                                                class="wow fadeInUp"
                                                data-wow-delay="0.6s"
                                                alt="image"/>
                                            <img
                                                src="assets/img/home-two/2.png"
                                                class="wow fadeInDown"
                                                data-wow-delay="0.6s"
                                                alt="image"/>
                                            <img
                                                src="assets/img/home-two/3.png"
                                                class="wow fadeInUp"
                                                data-wow-delay="0.6s"
                                                alt="image"/>
                                            <img
                                                src="assets/img/home-two/4.png"
                                                class="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="image"/>
                                            <img
                                                src="assets/img/home-two/5.png"
                                                class="wow fadeInDown"
                                                data-wow-delay="0.6s"
                                                alt="image"/>

                                            <img
                                                src="assets/img/home-two/main.png"
                                                class="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="banner-shape">
                        <img src="assets/img/home-two/cloud.png" alt="image"/>
                    </div>

                    <div class="default-shape">
                        <div class="shape-1">
                            <img src="assets/img/shape/4.png" alt="image"/>
                        </div>

                        <div class="shape-2 rotateme">
                            <img src="assets/img/shape/5.svg" alt="image"/>
                        </div>

                        <div class="shape-3">
                            <img src="assets/img/shape/6.svg" alt="image"/>
                        </div>

                        <div class="shape-4">
                            <img src="assets/img/shape/7.png" alt="image"/>
                        </div>

                        <div class="shape-5">
                            <img src="assets/img/shape/8.png" alt="image"/>
                        </div>
                    </div>
                </div>

                <section class="features-section pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <h2>Kenapa Harus Memilih Linux Study Club ?</h2>
                            <p>Study Club pada umumya sebuah wadah untuk menampung mahasiswa yang memiliki
                                niat belajar yang aktif
                            </p>
                            <div class="bar"></div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="features-content">
                                    <div class="icon">
                                        <i class="flaticon-blueprint"></i>
                                    </div>
                                    <h3>Wawasan</h3>
                                    <p>Mengajarkan berpikir secara holistik dalam berbagai sudut pandang yang
                                        berbeda - beda</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="features-content">
                                    <div class="icon">
                                        <i class="flaticon-update"></i>
                                    </div>
                                    <h3>Kemampuan</h3>
                                    <p>Mengajarkan serta menggali potensi terbaik dalam meningatkan kemampuan bidang
                                        masing - masing
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="features-content">
                                    <div class="icon left-icon">
                                        <i class="flaticon-security"></i>
                                    </div>
                                    <h3>Kualitas</h3>
                                    <p>Melahirkan individual yang berkualitas dalam bidang teknologi dan dalam
                                        penerapannya</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="features-content">
                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                    <h3>Manajemen Waktu</h3>
                                    <p>Mengelolah waktu dengan baik dengan tujuan mengatur daya pikir dan prioritas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="work-section pb-100">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="work-content">
                                    <h3>Ide,
                                        <span>Penelitian
                                        </span>Rencana, dan Strategi Belajar Bersama</h3>
                                    <p>Linux Study Club dapat mengembangkan ide agar dapat di wujudkan dalam
                                        berbagai aspek dan disisi lain salah satu langkah agar dapat terwujud ide - ide
                                        tersebut dibutuhkan mentor yang sangat berkompeten dibidangnya dalam bagian
                                        belajar bersama</p>

                                </div>
                            </div>

                            <div class="col-lg-6 pr-0">
                                <div class="work-image">
                                    <img src="assets/img/work-bg.jpg" alt="image"/>
                                </div>

                                <div class="work-video">
                                    <a
                                        href="https://www.youtube.com/watch?v=YymWhauqjoA"
                                        class="video-btn popup-youtube">
                                        <i class="flaticon-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="services-section bg-background pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <h2>Pengembangan Minat</h2>
                            <p>Belajar pemrograman, jaringan, desain grafis, dan hardware lebih mudah dengan
                                kelas belajar intensive yang memungkinkan belajar nya sambil praktek di satu
                                tempat yang sama. Lihat Interactive Coding Lainnya</p>
                            <div class="bar"></div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-services">
                                    <div class="icon bg-deb0fe">
                                        <i class="flaticon-it"></i>
                                    </div>
                                    <h3>Pemrograman</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada pemrograman
                                        berbasis web dan mobile.</p>
                                    <a href="single-services-2.html" class="read-btn">Read More</a>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="single-services">
                                    <div class="icon bg-79e8e2">
                                        <i class="flaticon-setting"></i>
                                    </div>
                                    <h3>Jaringan</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada jaringan
                                        misalnya Google Cloud, AWS, Cisco</p>
                                    <a href="single-services-2.html" class="read-btn">Read More</a>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="single-services">
                                    <div class="icon bg-fcc774">
                                        <i class="flaticon-promotion"></i>
                                    </div>
                                    <h3>Desain Grafis</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada desain grafis
                                        berbasis adobe ilustrator, corel draw, gimp, inkscape dan lain - lainnya
                                    </p>
                                    <a href="single-services-2.html" class="read-btn">Read More</a>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="single-services">
                                    <div class="icon bg-84b7fd">
                                        <i class="flaticon-cellphone"></i>
                                    </div>
                                    <h3>Hardware</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada hardware yang
                                        spesifik bergerak pada bidang robotika dan microcontroller</p>
                                    <a href="single-services-2.html" class="read-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="default-shape">
                        <div class="shape-1">
                            <img src="assets/img/shape/4.png" alt="image"/>
                        </div>

                        <div class="shape-2 rotateme">
                            <img src="assets/img/shape/5.svg" alt="image"/>
                        </div>

                        <div class="shape-3">
                            <img src="assets/img/shape/6.svg" alt="image"/>
                        </div>

                        <div class="shape-4">
                            <img src="assets/img/shape/7.png" alt="image"/>
                        </div>

                        <div class="shape-5">
                            <img src="assets/img/shape/8.png" alt="image"/>
                        </div>
                    </div>
                </section>

                <section class="support-section ptb-100">
                    <div class="container">
                        <div class="section-title">
                            <h2>Tren Teknologi ?</h2>
                            <p>Beberapa tren teknologi yang dapat dibahas langsung di wadah Linux Study Club
                            </p>
                            <div class="bar"></div>
                        </div>

                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="support-image">
                                    <img src="assets/img/support.png" alt="image"/>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="support-content">
                                    <div class="icon">
                                        <i class="flaticon-optimize"></i>
                                    </div>
                                    <h3>React JS dan Flutter</h3>
                                </div>

                                <div class="support-content">
                                    <div class="icon">
                                        <i class="flaticon-internet"></i>
                                    </div>
                                    <h3>Big Data Analysis</h3>
                                </div>

                                <div class="support-content">
                                    <div class="icon">
                                        <i class="flaticon-cloud-computing"></i>
                                    </div>
                                    <h3>Cloud Computing</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="overview-section pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <h2>Pengembangan Perangkat Lunak ?</h2>
                            <p>Linux Study Club membantu dalam mewujudukan ide teknologi menjadi kenyataan
                            </p>
                            <div class="bar"></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="overview-content">
                                    <div class="icon">
                                        <i class="flaticon-edit"></i>
                                    </div>

                                    <h3>Prototipe</h3>
                                    <p>Desain aplikasi atau teknologi anda baik berupa website, mobile, desktop
                                        maupun alat dalam aplikasi desain yang telah disediakan pada masing - masing
                                        platform</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="overview-content">
                                    <div class="icon">
                                        <i class="flaticon-thinking"></i>
                                    </div>

                                    <h3>Coding</h3>
                                    <p>Lakukan pengkodian aplikasi atau sistem teknologi dan tentukanlah bahasa
                                        pemrograman serta metode yang digunakan dalam aplikasi atau sistem anda</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="overview-content">
                                    <div class="icon">
                                        <i class="flaticon-analysis"></i>
                                    </div>

                                    <h3>Test</h3>
                                    <p>Testing aplikasi atau teknologi anda dengan bantu para anggota Linux Study
                                        Club dengan tujuan membantu pengujian dari sisi pengguna</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="overview-content">
                                    <div class="icon">
                                        <i class="flaticon-software"></i>
                                    </div>

                                    <h3>Develop</h3>
                                    <p>Luncurkan aplikasi atau teknologi anda pertama kali dengan mengharumkan nama
                                        Linux Study Club
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="default-shape">
                        <div class="shape-1">
                            <img src="assets/img/shape/4.png" alt="image"/>
                        </div>

                        <div class="shape-2 rotateme">
                            <img src="assets/img/shape/5.svg" alt="image"/>
                        </div>

                        <div class="shape-3">
                            <img src="assets/img/shape/6.svg" alt="image"/>
                        </div>

                        <div class="shape-4">
                            <img src="assets/img/shape/7.png" alt="image"/>
                        </div>

                        <div class="shape-5">
                            <img src="assets/img/shape/8.png" alt="image"/>
                        </div>
                    </div>
                </section>

                <section class="choose-section pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <h2>Aplikasi Mobile</h2>
                            <p>Upcoming</p>
                            <div class="bar"></div>
                        </div>

                        <div class="row align-items-center">
                            <div class="col-lg-4 col-md-6"></div>

                            <div class="col-lg-4 col-md-6">
                                <div class="image">
                                    <img src="assets/img/mobile.png" alt="image"/>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0"></div>
                        </div>
                    </div>
                </section>

                <section class="fun-facts-area pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <h2 class="text-white">Kami dalam hitungan</h2>
                            <div class="bar"></div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <div class="icon">
                                        <i class="flaticon-check"></i>
                                    </div>

                                    <h3>
                                        <span class="odometer" data-count="950">00</span>
                                    </h3>
                                    <p>Project</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <div class="icon">
                                        <i class="flaticon-happy"></i>
                                    </div>

                                    <h3>
                                        <span class="odometer" data-count="150">00</span>
                                    </h3>
                                    <p>Anggota</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <div class="icon">
                                        <i class="flaticon-technical-support"></i>
                                    </div>

                                    <h3>
                                        <span class="odometer" data-count="550">00</span>
                                    </h3>
                                    <p>Pengurus</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <div class="icon">
                                        <i class="flaticon-trophy"></i>
                                    </div>

                                    <h3>
                                        <span class="odometer" data-count="750">00</span>
                                    </h3>
                                    <p>Alumni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="team-section pb-70 pt-100">
                    <div class="container">
                        <div class="section-title">
                            <h2>Kami</h2>
                            <p>Sosok - sosok pemimpin dalam Linux Study Club yang sangat turut andil
                                membangun study club ini sebagai wadah pembelajaran intensif</p>
                            <div class="bar"></div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-team">
                                    <div class="image">
                                        <img src="assets/img/team/1.jpg" alt="image"/>
                                    </div>

                                    <div class="content">
                                        <h3>David Jon Korola</h3>
                                        <span>Web Developer</span>

                                        <ul class="social">
                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-facebook"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-twitter"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-team">
                                    <div class="image">
                                        <img src="assets/img/team/2.jpg" alt="image"/>
                                    </div>

                                    <div class="content">
                                        <h3>Alex Maxwel</h3>
                                        <span>Software Engineer</span>

                                        <ul class="social">
                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-facebook"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-twitter"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div class="single-team">
                                    <div class="image">
                                        <img src="assets/img/team/3.jpg" alt="image"/>
                                    </div>

                                    <div class="content">
                                        <h3>Louis Pasteur</h3>
                                        <span>App Developer</span>

                                        <ul class="social">
                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-facebook"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-twitter"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i class="flaticon-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Komponen Artikel */}
                <HomeArtikelTerbaru></HomeArtikelTerbaru>
                <section class="clients-section bg-background ptb-100">
                    <div class="container">
                        <div class="section-title">
                            <h2>Apa Kata Anggota Linux Study Club</h2>
                            <p>Sepatah kata dari anggota Linux Study Club mulai dari kepuasaan, pengalaman
                                menarik dan kritikan membangun untuk Study Club ini</p>
                            <div class="bar"></div>
                        </div>

                        <div class="clients-slider owl-carousel owl-theme">
                            <div class="clients-item">
                                <div class="icon">
                                    <i class="flaticon-left-quotes-sign"></i>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley</p>

                                <div class="clients-content">
                                    <h3>Moris Jacker</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>

                            <div class="clients-item">
                                <div class="icon">
                                    <i class="flaticon-left-quotes-sign"></i>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley</p>

                                <div class="clients-content">
                                    <h3>Alex Maxwel</h3>
                                    <span>Agent Management</span>
                                </div>
                            </div>

                            <div class="clients-item">
                                <div class="icon">
                                    <i class="flaticon-left-quotes-sign"></i>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                    ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley</p>

                                <div class="clients-content">
                                    <h3>Edmond Halley</h3>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


export default HomeIndex;