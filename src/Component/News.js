import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state ={
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=c5a774d85e8b4fca859e1b7fdc8ca79c";
        let data= await fetch(url);
        let parsedData = await data.json()
        this.setState({articles:parsedData.article})
    }

    render() {
        return (
            <div className="container my-3">
                <h1>News Rocket</h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" class="btn btn-dark">&larr; Previous page</button>
                    <button type="button" class="btn btn-dark">Next page&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
