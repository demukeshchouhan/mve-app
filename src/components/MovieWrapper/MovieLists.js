import React, { Component } from 'react';
import MovieItem from "./MovieItem";
import { Row } from "react-bootstrap";
import axios from "axios";
import jsonp from "jsonp";
import API_KEY from "../../API";

export default class MovieLists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieListData : []
		}
	}
	componentWillMount() {
		const api_key = API_KEY;
		// 881ded17
		const query = "13 hours";
		const language = "en-US" ;
		const sort_by = "popularity.desc";

		
		// http://www.omdbapi.com
		axios(`http://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=${language}&sort_by=${sort_by}`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					movieListData : [...this.state.movieListData, ...response.data.results]
				});
				console.log(this.state);
			});
	}
	render() {
		return (
			<MovieItem movieList={this.state.movieListData}/>
		)
	}
}
