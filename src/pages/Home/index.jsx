import React, {Component} from 'react';
import Products from '../../components/products';
import './styles.scss';

export default class Home extends Component {
    render () {
        return (
            <div className="home-page">
                <Products/>
            </div>
        );
    }
}