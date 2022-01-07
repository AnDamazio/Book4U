import React, { Component } from 'react'
import './AboutUS.css';
import Logo from './Logo';
import Menu from './Menu';
import Footer from './Footer';

export default class AboutUS extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Menu/>
                <Footer/>
            </div>
        )
    }
}
