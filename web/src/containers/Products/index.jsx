import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsList from '../../components/ProductsList';
import CategoryNotFound from '../../components/CategoryNotFound';
import FreeTextSearch from '../../components/FreeTextSearch';
import SimpleSelect from '../../components/SimpleSelect';
import * as productsAction from '../../actions/products';

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: ['books', 'house', 'clothes'],
			categoryName: "",
			searchPhrase: "",
			page: 0,
			sortOrder: [ 
				{ name:'ascending price', value: 'asc:price'},
				{ name:'descending price', value: 'desc:price'},
				{ name:'ascending name', value: 'asc:name'},
				{ name:'descending name', value: 'desc:name'}
			],
			sort: ''
		};
	};

	componentDidMount() {
		const categoryName = this.props.match.params.category || "";
		this.setState({ categoryName })
		this.props.getProducts(categoryName);
	};

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.category !== this.props.match.params.category) {
			const categoryName = this.props.match.params.category;
			this.setState({ categoryName })
			this.props.getProducts(categoryName);
		};
	};

	handlerChangeSort = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handlerChangeValue = (name, event) => {
		const { categoryName } = this.state
		const value = event.currentTarget.value;
		
		let page = 0;
		if(value === "") {
			page = this.state.page;
		}
		
		this.setState({ [name]: value }, this.props.getProducts(categoryName, page, value))
	};

	nextPage = () => {
		const { page, categoryName, searchPhrase } = this.state
		const currentPage = page + 1;
		this.setState((prevState) => {
			return { page: prevState.page + 1 };
		});
		this.props.getProducts(categoryName, currentPage, searchPhrase)
	}
	prevPage = () => {
		const { page, categoryName, searchPhrase } = this.state
		const currentPage = page === 0 ? page : page - 1;

		this.setState((prevState) => {
			return { page: prevState.page === 0 ? 0 : prevState.page - 1 };
		});
		this.props.getProducts(categoryName, currentPage, searchPhrase)
	}

	render() {

		let redirect = false;
		if(this.props.match.params.category) {
			redirect = this.state.categories.some(category => category === this.props.match.params.category)
		} else {
			redirect = true;
		}
		const { isLoading, products, took, totalProducts, numberProductsToDisplay } = this.props;
		return (
			<Fragment>
				<FreeTextSearch 
					value={this.state.searchPhrase} 
					onChange={this.handlerChangeValue} 
					name="searchPhrase" 
				/>
				<SimpleSelect 
					data={this.state.sortOrder}
					value={this.state.sort}
					onChange={this.handlerChangeSort}
					name="sort"
				/>
				{redirect ? (
					<ProductsList
						products={products} 
						took={took} 
						totalProducts={totalProducts} 
						isLoading={isLoading}
						page={this.state.page}
						prevPage={this.prevPage}
						nextPage={this.nextPage}
						numberProducts={numberProductsToDisplay}
					/>
				) :  (
					<CategoryNotFound />
				)}
			</Fragment>
		);
	};
};

Products.propTypes = {
  products: PropTypes.array,
	totalProducts: PropTypes.number,
	took: PropTypes.number,
	isLoading: PropTypes.bool,
	error: PropTypes.bool,
	numberProductsToDisplay: PropTypes.number
}

const mapStateToProps = (state) => {
	return {
		products: state.products.products,
		totalProducts: state.products.totalProducts,
		took: state.products.took,
		isLoading: state.products.isLoading,
		error: state.products.isError,
		numberProductsToDisplay: state.products.numberProductsToDisplay
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getProducts: (page, phrase, categoryId) => dispatch(productsAction.getProducts(page, phrase, categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);