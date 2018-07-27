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

    const { toggleMenu } = this.props;
    // const { pathname } = history.location;
    // const title = pathname.substr(1) || 'home';
    
    const renderUserLinks = (
      <Fragment>
        <NavLink exact to="/logout" className="main-bar__btn">
          <Button  variant="contained" size="medium" color="primary">
            Logout
          </Button>
        </NavLink>
        <NavLink exact to="/settings/profile" className="main-bar__btn">
          <Button variant="fab" disabled aria-label="Settings" >
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
          </Button>
        </NavLink>
      </Fragment>
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
            SHOP
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
