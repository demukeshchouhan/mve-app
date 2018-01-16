import React, { Component } from 'react';
import styled, { injectGlobal } from "styled-components";
import MovieLists from "./components/MovieWrapper/MovieLists";
import Footer from "./components/Footer/Footer";

injectGlobal`

  body, html{
    background-color : #f9f9f9
  }

`;



class App extends Component {
  render() {
    return (
        <MovieLists />
    );
  }
}

export default App;
