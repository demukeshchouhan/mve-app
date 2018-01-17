import React, { Component } from 'react';
import Logo from "./Logo";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Nav />
      </div>
    )
  }
}
