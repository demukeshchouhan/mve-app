import React, { Component } from 'react';
import { Row, Col, Glyphicon } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import API_KEY from "../../API";
import poster_img from "../../static/img/poster.png";

const CompCard = styled.div`
	background-color : #fff;
	padding : 30px;
`;

const CompTitle = styled.h3`
    font-size: 1.5em;
    margin-top:5px;
`;

const CompImg = styled.div`
    display:block;
    img{
        border: 6px solid #fff;
        box-shadow: 0 5px 15px #6e6767;
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
const BackgroundWrapper = styled.div`
    background-size: cover;
    background-position: center 25%;
    min-height: 500px;
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
		
		axios(`http://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
			.then((response) => {
				this.setState({
					singleMovie : response.data
				});
            });

            
        }
        
        render() {
        const img_width = 1280;
        const img_base_url = `https://image.tmdb.org/t/p/w${img_width}`;
        const { title, overview, release_date, vote_count, original_language, genres, spoken_languages, backdrop_path, poster_path }  
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

        const backgroundPoster = {
            "backgroundImage" : `url(${img_base_url}${backdrop_path})`
        }
        return (
            <div >
                <BackgroundWrapper style={backgroundPoster}>
                <div className="container" style={{"position":"relative"}}>
                <div style={{"top":"200px", "position" : "absolute", "padding": "15px", "background": "rgba(255,255,255,0.3)"}}>

                <Row>
                <Col sm={3}>
                    <CompImg>
                        <img src={poster_path ? img_base_url + poster_path : poster_img} alt={title}/>
                    </CompImg>
                </Col>

                <Col sm={9}>
                    <CompCard>
                        <CompTitle>{title}</CompTitle>
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
                        <hr />
                        <CompOverview>{overview}</CompOverview>
                    </CompCard>
                </Col>
            </Row>
                </div>

            <Row>

            </Row>
                </div>
            </BackgroundWrapper>
            </div>
          )
    }
  
}

