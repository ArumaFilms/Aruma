import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    // faFacebook,
    // faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {

        return (
            <div className={props.c} style={{"backgroundColor": "rgba(0, 0, 0, 0.05"}}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 border-top">

                <div className="col-md-4 d-flex align-items-center">
                <a href="/Aruma" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 mx-3">
                    <h4 className="text-dark">Aruma Films</h4>
                    <span>© 2021 Company, Inc</span>
                </a>
                </div>

                {/* design by */}
                <a href="https://www.instagram.com/_rjain_/" className="text-black" target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                <ul className="d-flex justify-content-center"><strong>Design By ~ _&#x0211B; &image;&#x1D51E;&#x1D526;&#x1D52B;_</strong></ul>
                </a>
                
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-3">
                <a href="https://www.youtube.com/channel/UCHiBsgw-EuyyS2J8j3NEFPg"
                className="youtube social mx-2" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.instagram.com/aruma_films/" className="instagram social mx-2" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                {/* <a href="/" className="facebook social mx-2" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="/" className="twitter social mx-2" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />  
                </a> */}
                </ul>

            </footer>
            </div>
        )
    }