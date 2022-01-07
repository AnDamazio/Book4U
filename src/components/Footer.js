import React, { Component } from 'react';
import './Footer.css';
import verMais from '../images/Ver-mais.svg';
import gitHub from '../images/Github.svg';
import playStore from '../images/Playstore.svg';

let images = [verMais, gitHub, playStore]

export default class Rodape extends Component {

    constructor(props) {
        super(props)
        this.state = {images: images}
    }

    

    render() {
        return (
            <div>
                <img src={this.state.images[0]} id="verMais" alt='ver mais'/>
                <img src={this.state.images[1]} id="gitHub" alt='github link'/>
                <img src={this.state.images[2]} id="playStore" alt='playstore link'/>
            </div>
        )
    }
}
