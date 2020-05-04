import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <section class="footer-section pt-100 pb-70">
                    <div class="container">
                        <div class="subscribe-area">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6">
                                    <div class="subscribe-content">
                                        <h2>Join Our Newsletter</h2>
                                        <p>Dapatkan email informasi dari kami</p>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <form class="newsletter-form">
                                        <input
                                            type="email"
                                            class="input-newsletter"
                                            placeholder="Enter your email"
                                            name="EMAIL"
                                            required
                                            autocomplete="off"/>
                                        <button type="submit">
                                            Subscribe Now
                                        </button>
                                        <div id="validator-newsletter" class="form-result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <div class="footer-heading">
                                        <h3>Tentang Kami</h3>
                                    </div>
                                    <p>LSC FIKOM UMI berfungsi sebagai wadah pengembangan kemampuan mahasiswa di
                                        bidang teknologi terkhususnya pada pemanfaatan dan pengembangan Teknologi Free
                                        Open Source Software.</p>
                                    <ul class="footer-social">
                                        <li>
                                            <a href="#">
                                                <i class="flaticon-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <div class="footer-heading">
                                        <h3>Important Links</h3>
                                    </div>

                                    <ul class="footer-quick-links">
                                        <li>
                                            <a href="about.html">Tentang Kami</a>
                                        </li>
                                        <li>
                                            <a href="projects.html">Kelas</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <div class="footer-heading">
                                        <h3>Featured Service</h3>
                                    </div>
                                    <ul class="footer-quick-links">
                                        <li>
                                            <a href="#">IT Management</a>
                                        </li>
                                        <li>
                                            <a href="#">Development</a>
                                        </li>
                                        <li>
                                            <a href="#">UI/UX Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Support Engineer</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-footer-widget">
                                    <div class="footer-heading">
                                        <h3>Contact</h3>
                                    </div>

                                    <div class="footer-info-contact">
                                        <i class="flaticon-phone-call"></i>
                                        <h3>Phone</h3>
                                        <span>
                                            <a href="tel:+882-569-756">08540472927</a>
                                        </span>
                                    </div>

                                    <div class="footer-info-contact">
                                        <i class="flaticon-envelope"></i>
                                        <h3>Email</h3>
                                        <span>
                                            <a href="mailto:hello@fria.com">admin@lscumi.com</a>
                                        </span>
                                    </div>

                                    <div class="footer-info-contact">
                                        <i class="flaticon-pin"></i>
                                        <h3>Alamat</h3>
                                        <span>Fakulas Ilmu Komputer, Universitas Muslim Indonesia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </section>
                <div class="copyright-area">
                    <div class="container">
                        <div class="copyright-area-content">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6">
                                    <p>
                                        <i class="far fa-copyright"></i>
                                        2020. All Rights Reserved by
                                        <a href="https://yudhaislamisulistya.my.id/" target="_blank">
                                            Lea Devs
                                        </a>
                                    </p>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <ul>
                                        <li>
                                            <a href="terms-condition.html">Terms Conditions</a>
                                        </li>
                                        <li>
                                            <a href="privacy-policy.html">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;