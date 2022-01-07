import React, { Component } from 'react';
import './Home.css';
import Rodape from './Footer';

export default class Home extends Component {

    render() {
        return (
            
                <div id='home'>
                    <div id='home--message'>
                        Novos, Seminovos, Usados, Troque agora!
                    </div>
                    
                    <div id='home--content'>
                    Todo livro é uma nova história, todo livro carrega uma história. Encontre a sua agora.
                    </div>
                    
                    <div id='home--button'>
                        <div id="home--button-background">
                            Baixe o Aplicativo
                        </div>
                    </div>
                    <Rodape/>
                </div>

        )
    }
}
