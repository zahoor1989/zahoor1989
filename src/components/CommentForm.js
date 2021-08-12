import React, {Component} from 'react';
import {LocalForm, Errors, Control } from 'react-redux-form';
import {Button, Label, Row, Col,Modal, ModalHeader, ModalBody} from 'reactstrap';


const required =  (val) => val && val.length;
const maxLength = ( len ) => ( val ) => !( val ) || (val.length <len);
const minLength = ( len ) => ( val ) => !( val ) || (val.length > len); 

export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    handleSubmit = (values)=>{
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    toggleModal = () => {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }
 
    render(){
        return(  
            <div className="row row-content">
            <div className="col-12">
                <Button onClick={this.toggleModal} ><span className="fa fa-pencil fa-lg"></span> Submit comments</Button>
            </div>
            <div className="col-md-12">
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Comments </ModalHeader> 
                    <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="mt-2 form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.select model=".rating" name="rating"  className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                        </Col>
                    </Row>
                    <Row  className="form-group mt-2">
                        <Label htmlFor="yourName" md={2}>Your Name</Label>
                        <Col md={10}>
                            <Control.text model=".yourName" id="yourName" name="yourName" className="form-control"  
                                validators={{
                                required, maxLength: maxLength(15), minLength : minLength(3),
                            }}/>
                                <Errors className="text-danger" model=".yourName" show="touched" messages={{
                                required :'required',
                                maxLength:'Maximum length should be 15 chars',
                                minLength:'Minimum length should be greater than 3 chars'
                            }} ></Errors>
                        </Col>
                    </Row>
                    <Row className="form-group mt-2">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" className="form-control"
                                        rows="12">
                                    </Control.textarea>
                                </Col>
                            </Row>
                    <Row row className="mt-5">
                        <Col md={{size:10, offset:2}}>
                            <Button type="submit" color="primary">
                                    Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
            </div>
        );
    }
}