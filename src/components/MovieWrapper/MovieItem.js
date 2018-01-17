import React from 'react';
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CompCard = styled.div`
	background-color : #fff;
	box-shadow: 0 10px 41px #eee;
`;

const CompTitle = styled.h3`
	padding : 15px;
	font-size: 0.95em;
	margin:0;
	min-height:80px;
`;

const CompImg = styled.div`
	display:block;
`;


export default (props) => {
	const img_width = 300;
	const img_base_url = `https://image.tmdb.org/t/p/w${img_width}`;
	const mveList = props.movieList.map((mve, index) => (
		<Col key={index} sm={12} md={6} lg={3}>
			<CompCard>
				<Link to={`movie/${mve.id}`}>
				<CompImg>
					<img src={img_base_url + mve.poster_path} alt={mve.title}/>
				</CompImg>
				<CompTitle>{mve.title.substring(0,30)}</CompTitle>
				</Link>
			</CompCard>
			{(index+1) % 4 === 0 ? <div className="clearfix" /> : ""}
		</Col>
			
	));
	return (
		<Row style={{"marginTop" : "25px"}}>
			{mveList}
		</Row>
	)
}
