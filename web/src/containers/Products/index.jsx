import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../../components/ProductsList';
import CategoryNotFound from '../../components/CategoryNotFound';
import FreeTextSearch from '../../components/FreeTextSearch';
import * as productsAction from '../../actions/products';

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: ['books', 'home', 'clothes'],
			searchPhrase: "",
			page: 0,
		};
	};

	componentDidMount() {
		const categoryName = this.props.match.params.category;
		this.props.getProducts(categoryName);
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

		this.setState({ [name]: value }, this.props.getProducts(categoryName, this.state.page, this.state.searchPhrase))
	}

	render() {
		const redirect = this.state.categories.some(category => category === this.props.match.params.category)
		const { isLoading, products, took, totalProducts } = this.props;
		
		return (
			<Fragment>
				<FreeTextSearch 
					value={this.state.searchPhrase} 
					onChange={this.handlerChangeValue} 
					name="searchPhrase" 
				/>
				
				{redirect ? (
					<ProductsList
						products={products} 
						took={took} 
						numberProducts={totalProducts} 
						isLoading={isLoading}
					/>
				) :  (
					<CategoryNotFound />
				)}
			</Fragment>
		);
	};
};
const mapStateToProps = (state) => {
	return {
		products: state.products.products,
		totalProducts: state.products.totalProducts,
		took: state.products.took,
		isLoading: state.products.isLoading,
		error: state.products.isError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getProducts: (page, phrase, categoryId) => dispatch(productsAction.getProducts(page, phrase, categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);