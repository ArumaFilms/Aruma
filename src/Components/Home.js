import React, { Component } from 'react'
import Video from './Video'

export default class Home extends Component {
    articles=[
        {
            "title":"NIGHTMARE (Official Video) AK47| Isha Dadwal | ARUMA FILMS | NEW PUNJABI SONG 2021",
            "description":"Song : NIGHTMARE | Featuring: AK47 & Isha Dadwal |Singer | Composer | lyrics : AK47 ( Abhishek ) | Video Production : ARUMA Films | Video Director | Editor :ARUMA ( Sudhanshu ) |  Poster | Thumbnail | Promotion :  Panther Media |  Crew : Anmol , Aditya , Harjot Singh",
            "url":"https://www.youtube.com/watch?v=vaZGZ4CtbVU&ab_channel=ARUMAFILMS",
            "imageUrl":"https://i.ytimg.com/vi/vaZGZ4CtbVU/hqdefault.jpg"
        },
        {
            "title":"Boyfriend VS Brother| comedy Vines| short film| Aruma Films",
            "description":"Featuring - Anmol Cheema | Aditya Singh Rana | Isha Dadwal Production - Aruma Films Story Written By - Anmol Cheema Directed & Edited By - Sudhanshu Sharma Sound Department - Dilpreet Kang & Kunal  Follow us on our social media handle",
            "url":"https://www.youtube.com/watch?v=Pxf63g_0gzQ&ab_channel=ARUMAFILMS",
            "imageUrl":"https://i.ytimg.com/vi/Pxf63g_0gzQ/maxresdefault.jpg"
        },
        {
            "title":"If WALLET was a GUY | Comedy Vines | Short film |ARUMA FILMS",
            "description":"Featuring - Anmol Cheema ( Owner ) , | Sudhanshu Sharma( Wallet)",
            "url":"https://www.youtube.com/watch?v=uHIyX4ropXY&ab_channel=ARUMAFILMS",
            "imageUrl":"https://i.ytimg.com/vi/uHIyX4ropXY/maxresdefault.jpg"
        },
        {
            "title":"BHANG BHAROSA cover Music video By ARUMA.S / DEEVOY SINGH",
            "description":"This is a cover music video of BHANG BHAROSA song by DEEVOY SINGH/ FT. ARUMA.S .   All the rights of the songs belongs to the owner of the song ( DEEVOY SINGH)  & and this video is made after the approval of the owner of the song ",
            "url":"https://www.youtube.com/watch?v=Zz_x56ORv-8&ab_channel=ARUMAFILMS",
            "imageUrl":"https://i.ytimg.com/vi/Zz_x56ORv-8/maxresdefault.jpg"
        }
    ]

    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    render() {
        return (
            <>
            <div className="container my-3">
                <h1 className="d-flex justify-content-center text-info">Our Videos</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-4" key={element.url}>
                        <Video title={element.title} description={element.description} url={element.url} imageUrl={element.imageUrl}/>
                    </div>
                })}
                </div>
            </div>
        </>
        )
    }
}
