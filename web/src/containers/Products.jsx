import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch';

import ProductsList from '../components/ProductsList';

class Products extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            numberProducts: 0,
            took: 0,
        };
    };

    componentDidMount() {
        fetch('http://localhost:7000/search')
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data.products, numberProducts: data.total, took: data.took * 0.001 })
            });
    };

    render() {
        return (
            <Fragment>
                <ProductsList products={this.state.products}/>
                {this.state.numberProducts}<br/>
                {this.state.took}sec
            </Fragment>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);