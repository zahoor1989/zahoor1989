import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col,Row} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

export default class ContactUs extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
  
    handleSubmit = (values)=>{
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }


    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>We are located</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a hrf="/" role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a hrf="/" role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a hrf="/" role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Your Feedback</h3>
                    </div>
                    <div className="col-md-12">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="mt-2 form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName" className="form-control" />
                                 </Col>
                            </Row>
                            <Row  className="form-group mt-2">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastName" id="lastName" name="lastName" className="form-control"  />
                                </Col>
                            </Row>
                            <Row className="form-group mt-2">
                                <Label htmlFor="telNum" md={2}>Tel. Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".telNum" id="telNum" name="telNum"  className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group mt-2">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" className="form-control"  />
                                </Col>
                            </Row>
                            <Row row className="mt-2">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"   className="form-check-input"/> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"  className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row row className="form-group mt-2">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" className="form-control"
                                        rows="12"></Control.textarea>
                                </Col>
                            </Row>
                            <Row row className="mt-5">
                                <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}