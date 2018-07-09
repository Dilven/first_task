import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';


import './style.css';
import { withRouter } from 'react-router'

class MainBar extends Component {

  render() {

    const { toggleMenu, history } = this.props;
    const { pathname } = history.location;
    const title = pathname.substr(1) || 'home';
  
    return (
      <div>
        <AppBar>
          <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleMenu.bind(this, true)}
          >
              <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
              {title}
          </Typography>
          </Toolbar>
        </AppBar>      
      </div>
    )
  }
} 


export default withRouter(MainBar)
