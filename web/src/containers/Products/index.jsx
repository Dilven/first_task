import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import Route from 'react-router-dom';

import ProductsList from '../../components/ProductsList';

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
        // const path = this.props.history.location.pathname.substr(1);
        // let whatProducts = path.substr(path.lastIndexOf("/") + 1);

        // whatProducts = whatProducts === 'products' ? ''
        const page = 0;
        const phrase = '';
        const categoryName = 'books';
        fetch(`http://localhost:7000/search?page=${page}&phrase=${phrase}&filter[category]=${categoryName}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data.products, numberProducts: data.total, took: data.took * 0.001 })
            });
    };

    render() {
        console.log(this.props.match.params.category);
        console.log(this.state.products)
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