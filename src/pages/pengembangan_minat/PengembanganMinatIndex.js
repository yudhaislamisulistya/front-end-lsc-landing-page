import React, {Component} from 'react'
import PageTitleArea from '../../components/PageTitleArea.js'
import {Link} from 'react-router-dom'

export default class PengembanganMinatIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea title="Pengembangan Minat"></PageTitleArea>
                <section class="services-section pt-100 pb-100">
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
                                    <div class="icon">
                                        <i class="flaticon-it"></i>
                                    </div>
                                    <h3>Pemrograman</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada pemrograman
                                        berbasis web dan mobile.</p>
                                    <Link to="/pengembangan-minat/pemrograman" class="btn btn-warning">Anggota</Link>
                                    < Link to = "/pengembangan-minat/detail/pemrograman"
                                    class = "btn btn-primary" > Read More < /Link>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="single-services">
                                    <div class="icon">
                                        <i class="flaticon-setting"></i>
                                    </div>
                                    <h3>Jaringan</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada jaringan
                                        misalnya Google Cloud, AWS, Cisco</p>
                                    <Link to="/pengembangan-minat/jaringan" class="btn btn-warning">Anggota</Link>
                                    <Link to="/pengembangan-minat/detail/jaringan" class="btn btn-primary">Read More</Link>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="single-services">
                                    <div class="icon">
                                        <i class="flaticon-promotion"></i>
                                    </div>
                                    <h3>Desain Grafis</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada desain grafis
                                        berbasis adobe ilustrator, corel draw, gimp, inkscape dan lain - lainnya</p>
                                    <Link to="/pengembangan-minat/desain-grafis" class="btn btn-warning">Anggota</Link>
                                    <Link to="/pengembangan-minat/detail/desain-grafis" class="btn btn-primary">Read More</Link>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="single-services">
                                    <div class="icon">
                                        <i class="flaticon-cellphone"></i>
                                    </div>
                                    <h3>Hardware</h3>
                                    <p>Pengembangan minat dan implementasi anggota yang berfokus pada hardware yang
                                        spesifik bergerak pada bidang robotika dan microcontroller</p>
                                    <Link to="/pengembangan-minat/hardware" class="btn btn-warning">Anggota</Link>
                                    <Link to="/pengembangan-minat/detail/hardware" class="btn btn-primary">Read More</Link>
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
            </React.Fragment>
        )
    }
}