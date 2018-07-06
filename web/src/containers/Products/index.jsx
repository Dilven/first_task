import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import ProductsList from '../../components/ProductsList';
import CategoryNotFound from '../../components/CategoryNotFound';
import FreeTextSearch from '../../components/FreeTextSearch';
import * as productsAction from '../../actions/products';

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			searchPhrase: "",
			page: 0
		};
	};

	getCategories = () => {
		fetch(`http://localhost:7000/categories`)
			.then(response => response.json())
			.then(data => {
					this.setState({
							categories: data.categories
					});
			});
	};

	componentDidMount() {
		const categoryName = this.props.match.params.category;
		this.props.getProducts(categoryName);
		this.getCategories();
	};

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.category !== this.props.match.params.category) {
			const categoryName = this.props.match.params.category
			this.props.getProducts(categoryName);
		}
	}

	handlerChangeValue = (name, event) => {
		const value = event.currentTarget.value;
		const categoryName = this.props.match.params.category

		this.setState({ [name]: value },this.props.getProducts(categoryName, 0, this.state.searchPhrase))
	}

	render() {
		console.log(this.props)
		const redirect = this.state.categories.some(category => category.name === this.props.match.params.category)
		return (
			<Fragment>
				<FreeTextSearch value={this.state.searchPhrase} onChange={this.handlerChangeValue} name="searchPhrase" />
				{redirect ? <ProductsList products={this.props.products} took={this.props.took} numberProducts={this.props.totalProducts} /> : <CategoryNotFound /> }
				
			</Fragment>
		);
	};
};
const mapStateToProps = (state) => {
	return {
		products: state.products.products,
		totalProducts: state.products.totalProducts,
		took: state.products.took
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getProducts: (page, phrase, categoryId) => dispatch(productsAction.getProducts(page, phrase, categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);