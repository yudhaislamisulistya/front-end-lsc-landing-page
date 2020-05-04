import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class PageTitleArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    getTextWithoutDash(title){
        return title.replace('-',' ')
    }

    render() {
        return (
            <div class="page-title-area item-bg-1">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-title-content">
                            <h2>{this.getTextWithoutDash(this.state.title)}</h2>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>{this.getTextWithoutDash(this.state.title)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
