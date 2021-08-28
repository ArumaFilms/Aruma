import React, { Component } from 'react'

export class Video extends Component {
    render() {
        let {title,description,url,imageUrl}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Click To Watch Video </a>
                </div>
                </div>
            </div>
        )
    }
}

export default Video
