import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "./Logo";
import ModalPopup from "./ModalPopup";

export default class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false };

	}
	handleModalPopup(e){
		e.preventDefault();
		this.setState({ showModal: true });
		console.log("popup")
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

				<Nav pullRight>
				<NavItem onClick={(e) => this.handleModalPopup(e)}>
						<Glyphicon glyph="glyphicon glyphicon-search" style={{"paddingRight":"15px"}}/>
							Search
				</NavItem>
				{this.state.showModal ? <ModalPopup visible={this.state.showModal}/> : null}
				</Nav>		
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
