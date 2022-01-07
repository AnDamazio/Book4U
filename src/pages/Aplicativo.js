import React, { Component } from 'react';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import phone from '../images/phone.svg';
import './Aplicativo.css';
import check from '../images/check.svg';
import 'boxicons';

export default class Aplicativo extends Component {
    render() {
        return (
           <div>
            <Menu/>
            <Logo/>
            
            <div className='background'>
                <img id='phone' src={phone} alt="" />
                <h1>APLICATIVO</h1>
                <div id="bulleted-list">
                    <ul>
                        <li id="bulleted-list--item"><box-icon name='check-circle' color='#1ed0df' ></box-icon>a</li>
                        
                    </ul>
                </div>
            </div>
            
           </div>
        )
    }
}
