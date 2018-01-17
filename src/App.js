import React, { Component } from 'react';
import styled, { injectGlobal } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import MovieLists from "./components/MovieWrapper/MovieLists";
import Footer from "./components/Footer/Footer";

injectGlobal`

  body, html{
    background-color : #f9f9f9
  }

`;

const AppWrapper = styled(Row)`
  background-color : #f92;
`;

class App extends Component {
  render() {
    return (
        <MovieLists />
    );
  }
}

export default App;
