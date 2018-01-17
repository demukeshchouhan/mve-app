import React, { Component } from 'react';
import { injectGlobal } from "styled-components";
import MovieLists from "./components/MovieWrapper/MovieLists";
import {withRouter} from 'react-router-dom';
// import Footer from "./components/Footer/Footer";


injectGlobal`

  body, html{
    background-color : #f9f9f9
  }

`;



class App extends Component {
  render() {
    return (
      <div className="container" >
        <MovieLists />
      </div>
    );
  }
}

export default withRouter(App);
