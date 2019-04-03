import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=1a5dd5650dad49f9ac2c821974147928`;
        
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => console.log(error));
    }


    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} /> //måste vara ngt unikt
        ));
    }

    render () {
        return (
            <div className="row">
                {this.renderItems()}
                </div>
        );
    }
}

export default News;

