import React, {Component} from 'react'
import PageTitleArea from '../../components/PageTitleArea.js'

export default class PengembanganMinatDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minat : props.match.params.minat,
        }
    }

    render() {
        return (
            <React.Fragment>
                <PageTitleArea title={this.state.minat}></PageTitleArea>
                <section class="services-details-area ptb-100">
                    <div class="container">
                        <div class="services-details-video">
                            <div class="details-image">
                                <img src="../../assets/img/video-bg.jpg" alt="image"/>
                            </div>

                            <div class="details-video">
                                <a
                                    href="https://www.youtube.com/watch?v=YymWhauqjoA"
                                    class="video-btn popup-youtube">
                                    <i class="bx bx-play"></i>
                                </a>
                            </div>

                            <div class="text">
                                <h3>Kami Memberikan Pembelajaran Tebaik Untuk Kalian</h3>
                                <p>Bertindak sebagai penyuplai dalam peningkatan kreatifitas dan jiwa seni
                                    anggota dalam bidang desain grafis. Dengan dukungan tools yang open source.</p>
                            </div>
                        </div>

                        <div class="services-details-overview">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="services-details-image">
                                        <img src="../../assets/img/app.png" alt="image"/>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12">
                                    <div class="services-details-desc">
                                        <h3>Jadwal Pembelajaran</h3>
                                        <p>Jadwal Pembelajaran Intensif dari Linux Study Club kepada kalian</p>

                                        <div class="services-details-accordion">
                                            <ul class="accordion">
                                                <li class="accordion-item">
                                                    <a class="accordion-title active" href="javascript:void(0)">
                                                        <i class="bx bx-plus"></i>
                                                        Senin
                                                    </a>
                                                    <p class="accordion-content show">
                                                        Materi : Web Development
                                                        <br/>
                                                        Jam Mulai : 16.00 WITA
                                                        <br/>
                                                        Jam Selesai : 18.00 WITA
                                                        <br/>
                                                        Media : Onsite
                                                        <br/>
                                                        Lokasi : Lingkungan Fakultas Ilmu Komputer
                                                        <br/>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}