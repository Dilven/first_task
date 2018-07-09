import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

import('./style.css');

const MainMenu = ({ toggleMenu, showCategories, categories, moreProducts, isOpen }) => {

  const renderCategoryLink = ({ id, name }) => {
    return (
      <NavLink key={id} className="app-menu__link" activeClassName="app-menu__link--active" exact to={name === "all" ? "/products" : `/products/${name}`}>
        <ListItem button className="app-menu__item app-menu__item--nested">
          {name}
        </ListItem>
      </NavLink>
    );
  };

  const menu = (
    <List component="nav" className="app-menu__list">
      <NavLink className="app-menu__link" activeClassName="app-menu__link--active" exact to="/">
        <ListItem button className="app-menu__item">
          home
                </ListItem>
      </NavLink>
      <Divider />
      <ListItem className="app-menu__item" button onClick={showCategories.bind(this)}>
        <span className="app-menu__link">Products</span>
        {moreProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={moreProducts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map(renderCategoryLink)}
        </List>
      </Collapse>
      <Divider />
    </List>
  )

  return (
    <Fragment>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={isOpen}
          onClose={toggleMenu.bind(this, false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="app-menu"
        >
          {menu}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          className="app-menu"
        >
          {menu}
        </Drawer>
      </Hidden>
    </Fragment>
  )
}

MainMenu.propTypes = {
  toggleMenu: PropTypes.func,
  showCategories: PropTypes.func,
  categories: PropTypes.array,
  moreProducts: PropTypes.bool,
  isOpen: PropTypes.bool
}

export default MainMenu;