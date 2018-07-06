import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import './style.css';
import { withRouter } from 'react-router'

class MainBar extends Component {
	render() {
		const { pathname } = this.props.history.location;
		const title = pathname.substr(1) || 'home';

		return (
			<Fragment>
				<div className="main-bar">
					<AppBar position="static">
						<Toolbar>
							<Typography variant="title" color="inherit" className="main-bar__typography">
								<span className="app__title">{title}</span>
							</Typography>
							<Button color="inherit">Login</Button>
						</Toolbar>
					</AppBar>
				</div>
			</Fragment>
		);
	};
};



export default withRouter(MainBar);
