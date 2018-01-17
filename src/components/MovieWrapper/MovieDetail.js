import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import API_KEY from "../../API";

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
    width:180px;
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


const CompOverview = styled.p`
    font-size:1.2em;
`;

export default class MovieDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            singleMovie : {}
        }
        const api_key = API_KEY;
		const id = Number(this.props.match.params.id);
		const language = "en-US" ;
		const sort_by = "popularity.desc";
        console.log(this.props);
		
		// http://www.omdbapi.com
		axios(`http://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					singleMovie : response.data
				});
				console.log(this.state);
            });
            
        
    }
    
    render() {
        const img_width = 300;
        const img_base_url = `https://image.tmdb.org/t/p/w${img_width}`;
        const { title, overview, release_date, vote_count }  = this.state.singleMovie;
        return (
            <Col sm={12}>
                <CompCard>
				<CompImg>
					<img src={img_base_url + this.state.singleMovie.poster_path} />
				</CompImg>
				<CompTitle>{title}</CompTitle>
				<CompReleaseDate>Release Date: {release_date}</CompReleaseDate>
                <CompOverview>{overview}</CompOverview>
				<CompVote>Vote: {vote_count}</CompVote>
			    </CompCard>
            </Col>
          )
    }
  
}

