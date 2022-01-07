import React, { Component } from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Card from '../components/Card';
import './SobreNos.css';
import missaoImage from '../images/missaoImage.svg';
import valoresImage from '../images/valoresImage.svg';
import visaoImage from '../images/visaoImage.svg';
import rodape from '../images/rodape.svg';

export default class SobreNos extends Component {
    render() {
        return (
            <div>
                <Logo/>
                <Menu/>
                <div id="Sobre">
                    <h1 id="Sobre--title">Sobre nós</h1>
                   
                    <Card image={missaoImage} title="MISSÃO" class="missao">
                    Ajudar pessoas que querem trocar ou doar seus livros
                    </Card>

                    <Card image={visaoImage} title="VISÃO" class="visao">
                    Ser o maior aplicativo de trocas e doações de livros
                    </Card>

                    <Card image={valoresImage} title="VALORES" class="valores">
                    Responsabilidade Socioambiental, segurança de dados e ética
                    </Card>
                   
                   <div id='Sobre--rodape'>
                        <img src={rodape} alt=''/>
                   </div>
                    
                </div>
                
            </div>
        )
    }
}
