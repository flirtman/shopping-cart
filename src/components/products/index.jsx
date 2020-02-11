import React , {Component} from 'react';
import axios from 'axios';
import './styles.scss';

export default class Products extends Component {
    constructor (props) {
        super (props);
        this.state = {
            products : []
        }
        this.renderProd = this.renderProd.bind(this);
        this.handleProdClick = this.handleProdClick.bind(this);
    }
    componentDidMount () {
        axios.get('/api/products.json') 
            .then (data => {
                this.setState({products: data.data.products});
            });
    }
    renderProd (prod, key) {
        return (
            <div className="prod" key={key}>
                <div>{prod.title}</div>
                <div>{prod.description}</div>
                <div>${prod.price.toFixed(2)}</div>
                <br/>
                <div><button onClick={() => this.handleProdClick(prod)}>Add to cart</button></div>
            </div>
        );
    }
    handleProdClick (prod) {
        localStorage.setItem("prod", JSON.stringify(prod));
        window.location.href = '/checkout';
    }
    render () {
        return (
            <>
                <h1>Title</h1>
                <div className={'prods-collection'}>
                {
                    this.state.products.map((prod, key) => (
                        this.renderProd(prod, key)  
                    ))
                }
                </div>
            </>
        )
    }
}