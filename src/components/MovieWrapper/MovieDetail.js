import React, { Component } from 'react';
import { Row, Col, Glyphicon } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import API_KEY from "../../API";

const CompCard = styled.div`
	background-color : #fff;
	padding : 15px;
`;

const CompTitle = styled.h3`
    font-size: 1.5em;
    margin-top:5px;
`;

const CompImg = styled.div`
    display:block;
    img{
        box-shadow: 0 0 15px #f2f2f2;
    }
`;


const CompReleaseDate = styled.p`
	font-size: 0.9em;
	color : #7F8FE9;
`;

const CompVote = styled.p`
	font-size: 0.9em;
	color : #c2c2c2
`;


const CompOverview = styled.p`
    font-size: 0.9em;
`;

const CompGenreList = styled.li`
    list-style: none;
    font-size: 0.6em;
    display: inline-block;
    border-radius: 3px;
    padding-right:10px;

    .badge{
        margin-top: -5px;
        background: #7F8FE9;
    }
`;

const GenreTitle = styled.span`
    display:inline-block;
    padding-right:5px;
`;
const SpokenLanguage = styled.li`
    list-style:none;
    display: inline-block;
    padding-right:5px;
    font-size: 0.9em;
    color: #7F8FE9;
`;

export default class MovieDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            singleMovie : {},
            genre : []
        }
        const api_key = API_KEY;
		const id = Number(this.props.match.params.id);
		const language = "en-US" ;
		const sort_by = "popularity.desc";
        console.log(this.props);
		
		axios(`http://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
			.then((response) => {
				this.setState({
					singleMovie : response.data
				});
            });

            
        }
        
        render() {
        const img_width = 300;
        const img_base_url = `https://image.tmdb.org/t/p/w${img_width}`;
        const { title, overview, release_date, vote_count, original_language, genres, spoken_languages }  
        = this.state.singleMovie;
        let genreList, spokenLanguages = null;
        if(genres) {
        genreList = genres.map((genre, index) => { 
            return(
                <CompGenreList key={index}>
                <span className="badge">{genre.name}</span>
                </CompGenreList>
            )
        });
        }
        if(spoken_languages) {
        spokenLanguages = spoken_languages.map((lang, index) => { 
            return(
                <SpokenLanguage key={index}>
                {lang.name}
                </SpokenLanguage>
            )
        });
        }

        console.log(genres);
        return (
            <div>
                <Row>
                <Col sm={3}>
                    <CompImg>
                        <img src={img_base_url + this.state.singleMovie.poster_path} />
                    </CompImg>
                </Col>

                <Col sm={9}>
                    <CompCard>
                        <CompTitle>{title}</CompTitle>
                        <CompOverview>{overview}</CompOverview>
                        <CompReleaseDate>Release Date: {release_date}</CompReleaseDate>
                        <CompVote>
                            <Glyphicon glyph="glyphicon glyphicon-thumbs-up" style={{"top":"3px"}} /> Vote: {vote_count}
                        </CompVote>
                        <p>{original_language}</p>
                        <ul> 
                            
                            <Glyphicon glyph="glyphicon glyphicon-volume-up" style={{"top":"3px", "paddingRight": "10px", "color": "#7F8FE9"}} />
                            Spoken Languages: {spokenLanguages}
                        </ul>
                        <ul> 
                        <GenreTitle>
                        <Glyphicon glyph="glyphicon glyphicon-tags" style={{"top":"3px", "paddingRight": "10px", "color": "#7F8FE9"}} />
                        Genre: </GenreTitle>{genreList}
                        </ul>
                    </CompCard>
                </Col>
            </Row>

            <Row>

            </Row>
            </div>
          )
    }
  
}

