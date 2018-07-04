import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './style.css';
import MainMenu from '../MainMenu';

class MainBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    switchMenu = () => {
        this.setState((prevState) => {
            return { isOpen: !prevState.isOpen };
        })
    }

    render() {
        return (
            <Fragment>
                <div className="main-bar">
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton onClick={this.switchMenu} className="menu-button" color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className="main-bar__typography">
                                Title
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <MainMenu isOpen={this.state.isOpen} />
            </Fragment>
        );
    }
}



export default MainBar;
