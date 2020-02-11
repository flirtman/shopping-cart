import React, {Component} from 'react';

export default class Checkout extends Component {
    constructor (props) {
        super(props);
        this.state = {
            prod : {}
        }
        this.renderProd = this.renderProd.bind(this);
    }
    componentDidMount () {
        const prodData = JSON.parse(localStorage.getItem("prod"));
        this.setState({prod: prodData});
    }
    renderProd () {
        return (
            <div className="prod-container">
                Title: {this.state.prod.title}<br/>
                Description: {this.state.prod.description}<br/>
                Price: ${this.state.prod.price}<br/>
            </div>
        )
    }
    render () {
        return (
            <>
                {this.renderProd()}
            </>
        )
    }
}