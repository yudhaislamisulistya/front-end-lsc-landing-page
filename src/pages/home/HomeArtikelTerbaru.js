import React, {Component} from 'react'
import Api from './Api.js'

class HomeArtikelTerbaru extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.addDataInterval = setInterval(() => {
            this.getAllDataArticles()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.addDataInterval)
    }

    getAllDataArticles() {
        fetch("http://localhost:8000/api/articles/limit/3")
            .then(response => response.json())
            .then(data => this.setState({
                items: data
            }))
    }

    get20FirstCharacter(data){
        return data.slice(0,100);
    }

    render() {
        const {items} = this.state
        return (
            <React.Fragment>
                <section class="blog-section pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <h2>Artikel
                                <span>Terbaru</span>
                            </h2>
                            <p>Kumpulan artikel seputar teknologi untuk mempermudah kamu belajar disertai
                                dengan event - even terbaru dari Linux Study Club</p>
                            <div class="bar"></div>
                        </div>

                        <div class="row">
                            {items.map((item, index) =>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <div class="image">
                                        <a href="single-blog.html">
                                            <img src="assets/img/blog/1.jpg" alt="image"/>
                                        </a>
                                    </div>
                                    <div class="content">
                                        <span>{item.created_at}</span>
                                        <h3>
                                            <a href="#">
                                                {item.title}
                                            </a>
                                        </h3>
                                        <p>{this.get20FirstCharacter(item.content)}...</p>
                                        <a href="single-blog-2.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default HomeArtikelTerbaru;