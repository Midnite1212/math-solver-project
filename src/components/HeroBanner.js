import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import heroImage from '../assets/hero-image.png'
import '../styles/herobanner.scss'

class HeroBanner extends Component {
    render() {
        return (
            <Jumbotron fluid className="introduction-jumbotron">
                <div className="container">
                    <div className="introduction-jumbotron-description">
                        <h1>Math Solver</h1>
                        <p>Your one stop calculator. Compute simple algebras, calculations, to integrals and graphing.</p>
                        <Button variant="primary" className="introduction-jumbotron-button">More USTools...</Button>
                    </div>
                    <div className="introduction-jumbotron-image d-none d-sm-block align-middle">
                        <img src={heroImage} className="align-right" />
                    </div>
                </div>
            </Jumbotron>
        );
    }
}
export default HeroBanner