import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsList from '../../components/ProductsList';
import CategoryNotFound from '../../components/CategoryNotFound';
import FreeTextSearch from '../../components/FreeTextSearch';
import SimpleSelect from '../../components/SimpleSelect';
import * as productsAction from '../../actions/products';
import debounce from 'lodash/debounce'

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: ['books', 'house', 'clothes'],
			categoryName: "",
			searchPhrase: "",
			page: 0,
			productsPerPage: 5,
			sortOrder: [
				{ name:'ascending price', value: '[price]=asc'},
				{ name:'descending price', value: '[price]=desc'},
				{ name:'ascending name', value: '[name]=asc'},
				{ name:'descending name', value: '[name]=desc'}
			],
			sort: '[name]=asc'
		};
	};

	componentDidMount() {
		const categoryName = this.props.match.params.category || "";
		this.setState({ categoryName })
		const filtr = {
			categoryName
		}
		this.props.getProducts(filtr, 0);
	};

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.category !== this.props.match.params.category) {
			const categoryName = this.props.match.params.category;
			const { productsPerPage, sort } = this.state;
			this.setState({ categoryName, page: 0, searchPhrase: "" })
			const filtr = {
				categoryName,
				productsPerPage,
				sort
			}
			this.props.getProducts(filtr);
		};
	};

	handleChangeSort = event => {
		const { categoryName, productsPerPage, } = this.state
		const filtr = {
			categoryName,
			productsPerPage,
			page: 0,
			searchPhrase: "",
			sort: event.target.value
		}
		this.setState({ [event.target.name]: event.target.value });
		this.props.getProducts(filtr);
	}

	handleChangeFilterText = (name, event) => {
		const value = event.currentTarget.value;
		this.setState({ [name]: value, page: 0 }, this.handleSearch())
	};

	handleSearch = debounce(() => {
		const { sort, categoryName, productsPerPage, searchPhrase, page } = this.state
		const filtr = {
			categoryName,
			productsPerPage,
			page,
			searchPhrase,
			sort
		}
    this.props.getProducts(filtr);
  }, 250);

	handleChangePage = (event, page) => {
		const { categoryName, searchPhrase, productsPerPage, sort } = this.state
		this.setState({ page });
		const filtr = {
			categoryName,
			page,
			searchPhrase,
			productsPerPage,
			sort
		}
		this.props.getProducts(filtr)
	}
	handleChangeRowsPerPage = event => {
		const value = event.target.value;
		const {categoryName, searchPhrase, sort} = this.state;
		this.setState({productsPerPage: value, page: 0});
		const filtr = {
			categoryName,
			page: 0,
			searchPhrase,
			productsPerPage: value,
			sort
		}
		this.props.getProducts(filtr)
  };

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
					onChange={this.handleChangeFilterText} 
					name="searchPhrase" 
				/>
				<SimpleSelect 
					data={this.state.sortOrder}
					value={this.state.sort}
					onChange={this.handleChangeSort}
					name="sort"
				/>
				{redirect ? (
					<ProductsList
						products={products} 
						took={took} 
						totalProducts={totalProducts} 
						isLoading={isLoading}
						page={this.state.page}
						handleChangePage={this.handleChangePage}
						handleChangeRowsPerPage={this.handleChangeRowsPerPage}
						productsPerPage={this.state.productsPerPage}
					/>
				) :  (
					<CategoryNotFound />
				)}
			</Fragment>
		);
	};
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
	totalProducts: PropTypes.number.isRequired,
	took: PropTypes.number.isRequired,
	isLoading: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	numberProductsToDisplay: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
	return {
		products: state.products.products,
		totalProducts: parseInt(state.products.totalProducts, 10),
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