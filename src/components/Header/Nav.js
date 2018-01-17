import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "./Logo";
import ModalPopup from "./ModalPopup";
import { withRouter } from 'react-router-dom';

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			showModal: false 
		};

	}


	render(){
		return (
			<Navbar>
				<Navbar.Header>
					<Logo />
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav>
					<LinkContainer to="/" activeClassName="active">
						<NavItem>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/about" activeClassName="active">
						<NavItem>About</NavItem>
					</LinkContainer>
					<LinkContainer to="/about" activeClassName="active">
						<NavItem>Top Rated Movies</NavItem>
					</LinkContainer>
					<LinkContainer to="/about" activeClassName="active">
						<NavItem>Tv Shows</NavItem>
					</LinkContainer>
				</Nav>

				<ModalPopup />	
				</Navbar.Collapse>
			</Navbar>
		)
	}
}


export default withRouter(NavigationBar);