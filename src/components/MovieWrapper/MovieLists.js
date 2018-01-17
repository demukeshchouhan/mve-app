import React, { Component } from 'react';
import MovieItem from "./MovieItem";
import axios from "axios";
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
		const language = "en-US" ;
		const sort_by = "popularity.desc";

		axios(`http://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=${language}&sort_by=${sort_by}`)
			.then((response) => {
				this.setState({
					movieListData : [...this.state.movieListData, ...response.data.results]
				});
			});
	}
	render() {
		return (
			<MovieItem movieList={this.state.movieListData}/>
		)
	}
}


