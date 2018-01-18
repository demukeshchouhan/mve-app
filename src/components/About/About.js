import React from 'react';
import { Nav, Glyphicon } from "react-bootstrap";

export default () => {
  return (
    <div className="container">
    <h3>About</h3>
    <p>A small demo application built with create-react-app and themoviedb API</p>
    <h4>Tools used:</h4>
    <Nav style={{"marginLeft": "15px"}}>
      <li style={{"border-bottom": "1px solid #eee", "paddingBottom": "5px"}}>
        <Glyphicon glyph="glyphicon glyphicon-heart" style={{"verticalAlign":"middle", "paddingRight": "15px"}}/> react v16 + 
        </li>
      <li style={{"border-bottom": "1px solid #eee", "paddingBottom": "5px"}}>
        <Glyphicon glyph="glyphicon glyphicon-heart" style={{"verticalAlign":"middle", "paddingRight": "15px"}}/> react-router v4
        </li>
      <li style={{"border-bottom": "1px solid #eee", "paddingBottom": "5px"}}>
        <Glyphicon glyph="glyphicon glyphicon-heart" style={{"verticalAlign":"middle", "paddingRight": "15px"}}/> react-bootstrap
        </li>
      <li style={{"border-bottom": "1px solid #eee", "paddingBottom": "5px"}}>
        <Glyphicon glyph="glyphicon glyphicon-heart" style={{"verticalAlign":"middle", "paddingRight": "15px"}}/> react-router-bootstrap
        </li>
      <li style={{"border-bottom": "1px solid #eee", "paddingBottom": "5px"}}>
        <Glyphicon glyph="glyphicon glyphicon-heart" style={{"verticalAlign":"middle", "paddingRight": "15px"}}/> styled-components
        </li>
      <li style={{"border-bottom": "1px solid #eee", "paddingBottom": "5px"}}>
        <Glyphicon glyph="glyphicon glyphicon-heart" style={{"verticalAlign":"middle", "paddingRight": "15px"}}/> axios
        </li>
      <li style={{"border-bottom": "1px solid #eee", "paddingBottom": "5px"}}>
        <Glyphicon glyph="glyphicon glyphicon-heart" style={{"verticalAlign":"middle", "paddingRight": "15px"}}/> themoviedb-API
        </li>
    </Nav>
    </div>
  )
}
