import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Menu from '../components/Menu';
import Home from '../components/Home';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Menu/>
                <Home/>
            </div>
        )
    }
}
