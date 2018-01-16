import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Logo from "./Logo";

export default () => {
  return (
	<Navbar>
		<Navbar.Header>
			<Logo />
		</Navbar.Header>

		<Nav>
		<NavItem eventKey={1} href="/">Home</NavItem>
		<NavItem eventKey={2} href="/about">About</NavItem>
		<NavItem eventKey={3} href="/about">Top Rated Movies</NavItem>
		<NavItem eventKey={4} href="/about">Tv Shows</NavItem>
		</Nav>
	</Navbar>
  )
}
