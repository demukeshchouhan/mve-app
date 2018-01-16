import React from 'react';
import styled from "styled-components";

const LogoWrapper = styled.a`
    display : "inline-block";
`;

export default () => {
  return (
    <LogoWrapper href="/" className="navbar-brand">Movie App</LogoWrapper>
  )
}
