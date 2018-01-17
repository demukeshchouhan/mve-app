import React, { Component } from 'react';
import { NavItem, Modal, FormControl, Row, Col, Image, Glyphicon, Nav  } from "react-bootstrap";
import { findDOMNode } from "react-dom";
import axios from "axios";
import API_KEY from "../../API";
import styled from "styled-components";
import { withRouter } from "react-router-dom"

const FilterdDataList = styled.div`
	padding: 15px;
`;

const FilterdDataListImage = styled.div`
	padding: 5px;
	img{
		cursor: pointer;
	}
`;

class ModalPopup extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			showModal: false,
			searchList: [] 
		};
	}
	
	handleModalPopup(e){
		this.setState({ 
			showModal: !this.state.showModal 
		});
	}
	handleClose() {
		this.setState({ 
			showModal: !this.state.showModal
		});
	}

	handleInputChange(evt) {
		const searchVal = findDOMNode(this.searchField).value;
		const api_key = API_KEY;
		const query = searchVal;
		axios.get(`https://api.themoviedb.org/3/search/movie?page=1&api_key=${api_key}&query=${query}`)
		.then(response => {
			this.setState({
				searchList : response.data.results
			});
		});

	}

	handleImageClick(id) {
		this.setState({ 
			showModal: !this.state.showModal,
			searchList : []
		});
		this.props.history.push(`/movie/${id}`);
	}

	
	render() {
		const img_width = 300;
		const img_base_url = `https://image.tmdb.org/t/p/w${img_width}`;
		const filteredList = this.state.searchList.map((mve, index) => (
			<Col sm={6} md={3} key={index}>
				<FilterdDataListImage>
				<Image src={img_base_url + mve.poster_path} alt={mve.title} onClick={() => this.handleImageClick(mve.id)}/>
				</FilterdDataListImage>
				{(index+1) % 4 === 0 ? <div className="clearfix" /> : ""}
			</Col>
		));
		return (
			<div>
			<Nav pullRight>	
			<NavItem onClick={(e) => this.handleModalPopup(e)}>
				<Glyphicon glyph="glyphicon glyphicon-search" style={{"paddingRight" : "15px"}}/>Search
			</NavItem>
			</Nav>
			<Modal show={this.state.showModal} onHide={() => this.handleClose()}>
			<Modal.Header closeButton>
				<Modal.Title>Search Movies</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<FormControl
					type="text"
					placeholder="Enter Movie name"
					onChange={(e) => this.handleInputChange(e) }
					ref={input => this.searchField = input}
				 />
				 {this.state.searchList.length > 0 ? <Row>
					 <FilterdDataList>
					 	{filteredList}
					 </FilterdDataList>
				</Row> : null}
			</Modal.Body>
			</Modal>
			</div>
			
		)
	}
}


export default withRouter(ModalPopup);