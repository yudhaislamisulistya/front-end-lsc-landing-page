import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import HomeIndex from './pages/home/HomeIndex.js'
import TentangKamiIndex from './pages/tentang_kami/TentangKamiIndex.js'
import PengembanganMinatIndex from './pages/pengembangan_minat/PengembanganMinatIndex.js'
import PengembanganMinatAnggota from './pages/pengembangan_minat/PengembanganMinatAnggota.js'
import PengembanganMinatDetail from './pages/pengembangan_minat/PengembanganMinatDetail.js'
import ProjekIndex from './pages/projek/ProjekIndex.js'
import PengurusIndex from './pages/pengurus/PengurusIndex.js'
import ArtikelIndex from './pages/artikel/ArtikelIndex.js'
import StoreIndex from './pages/store/StoreIndex.js'
import PendaftaranIndex from './pages/pendaftaran/PendaftaranIndex.js'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <div class="preloader">
                        <div class="preloader">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <Navbar></Navbar>
                    <main>
                      <Route path="/" exact component={HomeIndex} />
                      <Route path="/tentang-kami" exact component={TentangKamiIndex} />
                      <Route path="/pengembangan-minat" exact component={PengembanganMinatIndex} />
                      <Route path="/pengembangan-minat/:minat" exact component={PengembanganMinatAnggota} />
                      <Route path="/pengembangan-minat/detail/:minat" exact component={PengembanganMinatDetail} />
                      <Route path="/projek" exact component={ProjekIndex} />
                      <Route path="/pengurus" exact component={PengurusIndex} />
                      <Route path="/store" exact component={StoreIndex} />
                      <Route path="/artikel" exact component={ArtikelIndex} />
                      <Route path="/pendaftaran" exact component={PendaftaranIndex} />
                    </main>
                    <Footer></Footer>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App;