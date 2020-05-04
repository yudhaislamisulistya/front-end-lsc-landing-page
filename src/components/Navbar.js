import React, {
    Component
} from "react";

import {BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div class="navbar-area">
                <div class="fria-responsive-nav">
                    <div class="container">
                        <div class="fria-responsive-menu">
                            <div class="logo">
                                <a href="index-2.html">
                                    <img src="/assets/img/LSC.png" width="50px" height="auto" alt="logo"/>
                                    <span>Linux Study Club</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fria-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index-2.html">
                                <img src="/assets/img/LSC.png" width="50px" height="auto" alt="logo"/>
                                <span style={{color: "#f3ab32"}}>Linux Study Club</span>
                            </a>

                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link to="/" class="nav-link">
                                            Home
                                        </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link to="/tentang-kami" class="nav-link">
                                            Tentang Kami
                                        </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link to="/pengembangan-minat" class="nav-link">
                                            Pengembangan Minat
                                        </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link to="/projek" class="nav-link">
                                            Projek
                                        </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link to="/pengurus" class="nav-link">
                                            Pengurus
                                        </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link to="/store" class="nav-link">
                                            Linux Store
                                        </Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link to="/artikel" class="nav-link">
                                            Artikel
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;