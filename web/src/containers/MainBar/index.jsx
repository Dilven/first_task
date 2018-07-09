import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withRouter } from 'react-router'
import PropTypes from 'prop-types';

import './style.css';

class MainBar extends Component {

  render() {

    const { toggleMenu, history } = this.props;
    const { pathname } = history.location;
    const title = pathname.substr(1) || 'home';
    
    return (
      <header className="main-bar">
        <Toolbar>
        <IconButton
            color="inherit"
            style={{ display: 'none' }}
            aria-label="open drawer"
            onClick={toggleMenu.bind(this, true)}
            className='hamburger-button'
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap className="site-title">
            {title}
        </Typography>
        </Toolbar>
      </header>
    )
  }
} 

MainBar.propTypes = {
  toggleMenu: PropTypes.func,
  history: PropTypes.object
}

export default withRouter(MainBar)
