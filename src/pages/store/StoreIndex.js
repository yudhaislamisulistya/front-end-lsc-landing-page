import React, {Component} from 'react'

export default class StoreIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <section
                    class="hero-section py-100 bg-img d-flex align-items-center"
                    style={{
                    backgroundImage: 'url(assets/img/hero-section/hero-bg.png)'
                }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="hero-text">
                                    <h1>Secure IT Solutions for a more secure environment</h1>
                                    <p>Lorem ipsum dummy text are usually use. Replace your text bare usually
                                        <br/>use in these section. So I used here. replace your text</p>
                                </div>
                            </div>

                            <div
                                class="d-none d-md-block wow animated customFadeInRight hero-animation-image">
                                <img src="assets/img/hero-section/hero-right.png" alt=""/>
                            </div>
                            <div
                                class="d-none d-md-block wow animated customFadeInLeft tob-animation-image">
                                <img src="assets/img/hero-section/tob.png" alt=""/>
                            </div>

                        </div>
                    </div>
                </section>
                <div class="shop-page another-page pt-65">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="categories">
                                    <div class="categorie-title">
                                        <h4>
                                            <i class="flaticon-layers"></i>Categories</h4>
                                    </div>
                                    <ul class="categorie-list">
                                        <li class="active">
                                            <a href="#">
                                                <i class="flaticon-dress"></i>Women's Fashion</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-fashion"></i>
                                            <a href="#">Men's Fashion</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-card-payment"></i>
                                            <a href="#">Phones & Telecommunications</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-monitor"></i>
                                            <a href="#">Computer, Office & Security</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-chip"></i>
                                            <a href="#">Consumer Electronics</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-wedding-ring"></i>
                                            <a href="#">Jewelry & Watches</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-track"></i>
                                            <a href="#">Home, Pet & Appliances</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-portfolio"></i>
                                            <a href="#">Bags & Shoes</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-baby-boy"></i>
                                            <a href="#">Toys , Kids & Babies</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-confetti"></i>
                                            <a href="#">Outdoor Fun & Sports</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-heartbeat"></i>
                                            <a href="#">Beauty, Health & Hair</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-scooter"></i>
                                            <a href="#">Automobiles & Motorcycles</a>
                                        </li>
                                        <li>
                                            <i class="flaticon-customer-support"></i>
                                            <a href="#">Home Improvement & Tools</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-6">
                                <div class="top-product-list">
                                    <div class="row">

                                        <div class="col-lg-3 col-md-6 col-sm-4 col-6">
                                            <a href="product-details.html" class="product-item">
                                                <img class="product-image" src="assets/img/shop/l-product1.png" alt=""/>
                                                <span class="product-price">$ 7.88</span>
                                            </a>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-4 col-6">
                                            <a href="product-details.html" class="product-item">
                                                <img class="product-image" src="assets/img/shop/l-product2.png" alt=""/>
                                                <span class="product-price">$ 15.00</span>
                                            </a>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-4 col-6">
                                            <a href="product-details.html" class="product-item">
                                                <img class="product-image" src="assets/img/shop/l-product3.png" alt=""/>
                                                <span class="product-price">$ 10.50</span>
                                            </a>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-4 col-6">
                                            <a href="product-details.html" class="product-item">
                                                <img class="product-image" src="assets/img/shop/l-product4.png" alt=""/>
                                                <span class="product-price">$ 3.50</span>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="section-title">
                                    <h2>Trending Collection</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <a href="product-details.html"><img class="img-fluid" src="assets/img/shop/s-product-1.png" alt=""/>
                                        </a>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Modern Shoes</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.3</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <a href="product-details.html"><img class="img-fluid" src="assets/img/shop/s-product-2.png" alt=""/></a>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Black Jacket</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.0</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <a href="product-details.html"><img class="img-fluid" src="assets/img/shop/s-product-3.png" alt=""/></a>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Packet</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.8</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <a href="product-details.html"><img class="img-fluid" src="assets/img/shop/s-product-4.png" alt=""/></a>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Winter Shoes</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.8</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <img class="img-fluid" src="assets/img/shop/s-product-5.png" alt=""/>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Ladies Bag</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.3</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <img class="img-fluid" src="assets/img/shop/s-product-6.png" alt=""/>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Ladies Short Pant</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.3</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <img class="img-fluid" src="assets/img/shop/s-product-7.png" alt=""/>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Sport Shoes</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.0</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-product-item">
                                    <div class="product-img">
                                        <img class="img-fluid" src="assets/img/shop/s-product-8.png" alt=""/>
                                    </div>
                                    <div class="single-product-details">
                                        <a href="product-details.html">
                                            <h5>Black Bag</h5>
                                        </a>
                                        <div class="price">
                                            <span class="amount">
                                                <span class="Price-Symbol">$</span>6.79</span>
                                        </div>
                                        <div class="ratting">
                                            <span class="fa fa-star">
                                                4.5</span>
                                        </div>
                                        <div class="cart-btn">
                                            <a href="product-details.html">
                                                <i class="flaticon-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row browse-btn-wrap text-center">
                            <div class="col-lg-12">
                                <a href="shop-grid.html" class="btn-bg">Browse All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}