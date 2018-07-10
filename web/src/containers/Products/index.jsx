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
			categories: ['books', 'home', 'clothes'],
			categoryName: "",
			searchPhrase: "",
			page: 0,
			sortOrder: [ 
				{ name:'ascending', value: 'asc'},
				{ name:'descending', value: 'desc'}
			],
			sortType: [
				{ name: 'price', value: 'price'},
				{ name: 'name', value: 'name'}
			],
			order: '',
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
			return { page: prevState.page === 0 ? 0 : - 1 };
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
		const { isLoading, products, took, totalProducts } = this.props;
		return (
			<Fragment>
				<FreeTextSearch 
					value={this.state.searchPhrase} 
					onChange={this.handlerChangeValue} 
					name="searchPhrase" 
				/>
				<SimpleSelect 
					data={this.state.sortOrder}
					value={this.state.order}
					onChange={this.handlerChangeSort}
					name="order"
				/>
				<SimpleSelect 
					data={this.state.sortType}
					value={this.state.sort}
					onChange={this.handlerChangeSort}
					name="sort"
				/>
				{redirect ? (
					<ProductsList
						products={products} 
						took={took} 
						numberProducts={totalProducts} 
						isLoading={isLoading}
						prevPage={this.prevPage}
						nextPage={this.nextPage}
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
	error: PropTypes.bool
}

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