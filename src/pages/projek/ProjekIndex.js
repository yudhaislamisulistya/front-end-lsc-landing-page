import React, {Component} from 'react'
import PageTitleArea from '../../components/PageTitleArea.js'

export default class ProjekIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea title="Projek"></PageTitleArea>
                <section class="protfolio-section pt-100 pb-100">
                    <div class="container">
                        <div class="section-title">
                            <h2>Hasil
                                <span>Projek</span>
                                Kami</h2>
                            <p>Mengembengkan kemampuan dalam berbagai bidang disertai dengan pengalaman
                                kerja dalam mengghasilkan sesuatu yang bermanfaat bagi banyak orang</p>
                            <div class="bar"></div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-protfolio">
                                    <div class="image">
                                        <a href="single-projects.html">
                                            <img src="assets/img/protfolio/1.png" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <a href="single-projects.html">
                                            <h3>Creative Web Develop</h3>
                                        </a>
                                        <a href="single-projects.html">
                                            <span>Web Design</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-protfolio">
                                    <div class="image">
                                        <a href="single-projects.html">
                                            <img src="assets/img/protfolio/2.png" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <a href="single-projects.html">
                                            <h3>Digital Services</h3>
                                        </a>
                                        <a href="single-projects.html">
                                            <span>App Development</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-protfolio">
                                    <div class="image">
                                        <a href="single-projects.html">
                                            <img src="assets/img/protfolio/3.png" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <a href="single-projects.html">
                                            <h3>Complex Design</h3>
                                        </a>
                                        <a href="single-projects.html">
                                            <span>Software Development</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-protfolio">
                                    <div class="image">
                                        <a href="single-projects.html">
                                            <img src="assets/img/protfolio/4.png" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <a href="single-projects.html">
                                            <h3>Creative Web Develop</h3>
                                        </a>
                                        <a href="single-projects.html">
                                            <span>React Development</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-protfolio">
                                    <div class="image">
                                        <a href="single-projects.html">
                                            <img src="assets/img/protfolio/5.png" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <a href="single-projects.html">
                                            <h3>Digital Services</h3>
                                        </a>
                                        <a href="single-projects.html">
                                            <span>E-commerce Development</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-protfolio">
                                    <div class="image">
                                        <a href="single-projects.html">
                                            <img src="assets/img/protfolio/6.png" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <a href="single-projects.html">
                                            <h3>Complex Design</h3>
                                        </a>
                                        <a href="single-projects.html">
                                            <span>Software Engineering</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="pagination-area">
                                    <a href="#" class="prev page-numbers">
                                        <i class="flaticon-left"></i>
                                    </a>
                                    <a href="#" class="page-numbers">1</a>
                                    <span class="page-numbers current" aria-current="page">2</span>
                                    <a href="#" class="page-numbers">3</a>
                                    <a href="#" class="page-numbers">4</a>
                                    <a href="#" class="next page-numbers">
                                        <i class="flaticon-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}