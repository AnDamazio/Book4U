import React, { Component } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';


export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {items: ['Sobre', 'Contato', 'Aplicativo'], 'items-left': ['16px', '117px', '230px'], 'items-link': ['/SobreNos', '/Contato', '/Aplicativo']}
    }

    componentDidMount() {

        this.oi = () => {
            console.log('olá')
        }
        //Cria as opções do menu, definindo o atributo left dinâmicamente 
        this.state.items.forEach((element, index)=> {
            let item = document.createElement('a');
            item.setAttribute('class', 'navbar--item');
            item.setAttribute('href', this.state['items-link'][index])
            item.innerHTML = `<p>${element}</p>`
            item.style.left = this.state['items-left'][index]
            document.getElementById('navbar').appendChild(item)
        })
    }

    render() {
        return (
            <>
                <div id='navbar'>
                    <div id="navbar--button-cadastrar">Cadastrar</div>
                    <div id="navbar--button-entrar">Entrar</div>
                </div>

            </>
        )
    }
}
