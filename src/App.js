import React, { Component } from 'react';
import styled, { injectGlobal } from "styled-components";

injectGlobal`

  body, html{
    background-color : #333
  }

`;

const AppWrapper = styled.div`
  background-color : #f92;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        
      </AppWrapper>
    );
  }
}

export default App;
