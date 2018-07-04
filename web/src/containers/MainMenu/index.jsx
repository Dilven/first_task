import React from 'react';
import { NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import ('./style.css');

const MainMenu = ({ isOpen }) => {
    return (
      <div>
        <div className={isOpen ? "app-menu" : "app-menu--hidden"}>
            <List component="nav" className="app-menu__list">
                <ListItem>
                    <NavLink className="app-menu-link" activeClassName="app-menu-link--active" exact to="/">Home</NavLink>
                </ListItem>
                <Divider/>
                <ListItem>
                    <NavLink className="app-menu-link" activeClassName="app-menu-link--active" to="/products">Products</NavLink>
                </ListItem>
            </List>
        </div>
      </div>
    )
}

export default MainMenu;