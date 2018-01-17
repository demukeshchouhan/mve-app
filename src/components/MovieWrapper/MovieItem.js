import React from 'react';
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CompCard = styled.div`
	background-color : #fff;
	padding : 15px;
`;

const CompTitle = styled.h3`
	padding : 10px 0px;
	font-size: 1.5em;
	min-height: 70px;
`;

const CompImg = styled.div`
	display:block;
`;


const CompReleaseDate = styled.p`
	padding : 10px 0px;
	font-size: 0.9em;
	color : #7F8FE9;
`;

const CompVote = styled.p`
	padding : 10px 0px;
	font-size: 0.9em;
	color : #c2c2c2
`;


export default (props) => {
	const img_width = 300;
	const img_base_url = `https://image.tmdb.org/t/p/w${img_width}`;
	const mveList = props.movieList.map((mve, index) => (
		<Col key={index} sm={12} md={6} lg={3}>
			<CompCard>
				<Link to={`movie/${mve.id}`}>
				<CompImg>
					<img src={img_base_url + mve.poster_path} />
				</CompImg>
				<CompTitle>{mve.title}</CompTitle>
				</Link>
				<CompReleaseDate>Release Date: {mve.release_date}</CompReleaseDate>
				<CompVote>Vote: {mve.vote_count}</CompVote>
			</CompCard>
			{(index+1) % 4 === 0 ? <div className="clearfix" /> : ""}
		</Col>
			
	));
	return (
		<Row>
			{mveList}
		</Row>
	)
}
