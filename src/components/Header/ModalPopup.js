import React, { Component } from 'react';
import { NavItem, Modal, Button } from "react-bootstrap";

export default class ModalPopup extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			showModal: this.props.visible 
		};
		console.log(this.state, this.props);
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.visible != this.props.visible) {
			this.setState({ 
				showModal: nextProps.visible
			});
		  }
		
	}
	handleClose() {
		this.setState({ 
			showModal: !this.props.visible
		});
	}
	
	render() {
		return (	
			<div>
			<Modal show={this.state.showModal} onHide={() => this.handleClose()}>
			<Modal.Header closeButton>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>

			<Modal.Body>One fine body...</Modal.Body>

			<Modal.Footer>
				<Button onClick={() => this.handleClose()}>Close</Button>
				<Button bsStyle="primary">Save changes</Button>
			</Modal.Footer>
			</Modal>
			</div>
		)
	}
}
