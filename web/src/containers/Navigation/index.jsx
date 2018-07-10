import React, { Component, Fragment } from 'react'
import MainMenu from '../../components/MainMenu';
import MainBar from '../MainBar'



export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: [
          {
            id: 0,
            name: 'all'
          },
          { 
            id: 1,
            name: 'house'
          },
          { 
            id: 2,
            name: 'books'
          },
          { 
            id: 3,
            name: 'clothes'
          }],
        moreProducts: true,
        isOpen: false,
    };
  };

  handlerToggleMenu = (isOpen) => {
      this.setState({ isOpen });
  };

  handlerShowCategories = () => {
      this.setState(state => ({ moreProducts: !state.moreProducts }));
  };

  render() {
    return (
      <Fragment>
        <MainBar 
          toggleMenu={this.handlerToggleMenu}
        />
        <MainMenu 
          toggleMenu={this.handlerToggleMenu}
          showCategories={this.handlerShowCategories}
          categories={this.state.categories}
          moreProducts={this.state.moreProducts}
          isOpen={this.state.isOpen}
        />
      </Fragment>
    )
  }
}
