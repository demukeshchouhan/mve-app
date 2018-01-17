import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoWrapper = styled(Link)`
    display : "inline-block";
`;

export default () => {
  return (
    <LogoWrapper to="/" className="navbar-brand">Movie App</LogoWrapper>
  )
}
