import React, { Component, Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import { withRouter } from 'react-router'
import PropTypes from 'prop-types';

import './style.css';

class MainBar extends Component {

  render() {
    const { isAuthenticated } = this.props.auth;

    const { toggleMenu, history } = this.props;
    const { pathname } = history.location;
    const title = pathname.substr(1) || 'home';
    
    const renderUserLinks = (
      <NavLink exact to="/logout" className="main-bar__btn">
        <Button  variant="contained" size="medium" color="primary">
          Logout
        </Button>
      </NavLink>
    )

    const renderQuestLinks = (
      <Fragment>
        <NavLink exact to="/login" className="main-bar__btn">
          <Button  variant="contained" size="medium" color="primary">
            Login
          </Button>
        </NavLink>
        <NavLink exact to="/signup" className="main-bar__btn">
          <Button  variant="contained" size="medium" color="primary">
            Sign up
          </Button>
        </NavLink>
      </Fragment>
    )

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
          { isAuthenticated ? renderUserLinks: renderQuestLinks}
        </Toolbar>
      </header>
    )
  }
} 

MainBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(withRouter(MainBar));
