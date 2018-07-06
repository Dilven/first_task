import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import fetch from 'isomorphic-fetch';


import('./style.css');

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            moreProducts: true,
            isOpen: true,
        };
    };

    toggleMenu = (isOpen) => {
        this.setState({ isOpen });
    };

    showCategories = () => {
        this.setState(state => ({ moreProducts: !state.moreProducts }));
    };

    renderCategoryLink = ({id ,name}) => {
        return(
            <NavLink key={id} className="app-menu__link" activeClassName="app-menu__link--active" to={`/products/${name}`}>
                <ListItem button className="app-menu__item app-menu__item--nested">
                    {name}
                </ListItem>
            </NavLink>
        );  
    };

    componentDidMount() {
        fetch(`http://localhost:7000/categories`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    categories: data.categories
                })
            });
    };

    render() {
        return (
            <div>
                <Drawer open={this.state.isOpen} onClose={() => this.toggleMenu(false)} className="app-menu">
                    <div
                        tabIndex={0}
                        role="button"
                        onKeyDown={() => this.toggleMenu(false)}
                    >
                        <List component="nav" className="app-menu__list">
                            <NavLink className="app-menu__link" activeClassName="app-menu__link--active" exact to="/">
                                <ListItem button className="app-menu__item">
                                    home
                                </ListItem>
                            </NavLink>
                            <Divider />
                            <ListItem className="app-menu__item" button onClick={this.showCategories}>
                                Products
                                {this.state.moreProducts ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.moreProducts} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                   {this.state.categories.map(this.renderCategoryLink)} 
                                </List>
                            </Collapse>
                            <Divider />
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default MainMenu;