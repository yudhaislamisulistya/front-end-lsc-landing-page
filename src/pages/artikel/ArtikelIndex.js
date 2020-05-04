import React, {Component} from 'react'
import PageTitleArea from '../../components/PageTitleArea.js'

export default class ArtikelIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea title="Artikel"></PageTitleArea>
                <section class="blog-section pt-100 pb-100">
                    <div class="container">
                        <div class="section-title">
                            <h2>Our
                                <span>Latest</span>
                                News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                gravida.</p>
                            <div class="bar"></div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <div class="image">
                                        <a href="single-blog.html">
                                            <img src="assets/img/blog/1.jpg" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <span>20 March 2020</span>
                                        <h3>
                                            <a href="#">
                                                Great Tips To Earn More Money From Digital Industry
                                            </a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                        <a href="single-blog-2.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <div class="image">
                                        <a href="single-blog.html">
                                            <img src="assets/img/blog/2.jpg" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <span>23 April 2020</span>
                                        <h3>
                                            <a href="#">
                                                The Billionaire Guide On Design That will Get You Rich
                                            </a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                        <a href="single-blog-2.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <div class="image">
                                        <a href="single-blog.html">
                                            <img src="assets/img/blog/3.jpg" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <span>27 June 2020</span>
                                        <h3>
                                            <a href="#">
                                                Making Peace With The Feast Or Famine Of Freelancing
                                            </a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                        <a href="single-blog-2.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <div class="image">
                                        <a href="single-blog.html">
                                            <img src="assets/img/blog/4.jpg" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <span>24 March 2020</span>
                                        <h3>
                                            <a href="#">
                                                Startup Marketing Solution for Business Owner
                                            </a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                        <a href="single-blog-2.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <div class="image">
                                        <a href="single-blog.html">
                                            <img src="assets/img/blog/5.jpg" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <span>20 March 2020</span>
                                        <h3>
                                            <a href="#">
                                                Web Developement Best Work in Future World
                                            </a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                        <a href="single-blog-2.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <div class="image">
                                        <a href="single-blog.html">
                                            <img src="assets/img/blog/6.jpg" alt="image"/>
                                        </a>
                                    </div>

                                    <div class="content">
                                        <span>17 March 2020</span>
                                        <h3>
                                            <a href="#">
                                                Instagram Feed Add To Your WordPress Site
                                            </a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                        <a href="single-blog-2.html" class="read-more">Read More</a>
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