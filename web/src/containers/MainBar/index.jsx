import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


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
        <Toolbar className="main-bar__toolbar">
        <IconButton
            color="inherit"
            style={{ display: '' }}
            aria-label="open drawer"
            onClick={toggleMenu.bind(this, true)}
            className='hamburger-button'
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap className="site-title">
            {title}
        </Typography>
        <Button className="main-bar__btn" variant="contained" size="medium" color="primary">
          Login
        </Button>
        </Toolbar>
      </header>
    )
  }
} 

MainBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(MainBar)
