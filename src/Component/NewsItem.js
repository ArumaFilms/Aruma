import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}= this.props
        return (
            <div className="my-3">
                <div class="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"http://boatmanwindsor.com/wp-content/uploads/2014/11/boatman-0458-kk-1200x800.jpg":imageUrl} class="card-img-top" alt="."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" class="btn btn-dark">ReadMore</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
