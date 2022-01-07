import React, { Component } from 'react'
import './Card.css';

export default class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {image: '', title: '', class: ''}
    }

    componentDidMount() {
        
    }


    render() {
        return (
            <>
                <div className={"card--" + this.props.class}>
                    
                </div>
                <h1 className={"card--title-" + this.props.class}>{this.props.title}</h1>
                <img className={"card--image-" + this.props.class} src={this.props.image} alt=''/>
                <p className={"card--content-" + this.props.class}>{this.props.children}</p>

            </>
        )
    }
}
