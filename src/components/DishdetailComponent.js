import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';



const RenderDish = ({dish})=>{
        if(dish != null){
        return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                )
        }else{
            return   <div></div>
        }
    }
const RenderSelectedDishComments = ({comments}) => {
        if(comments != null){
            const comment = comments.map((comment) => {
                return (
                    <Card key={comment.id}  className="mt-1">
                      <CardBody>
                        <CardText>{comment.comment}</CardText>
                        <CardText>
                          <small className="text-muted">--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</small>
                        </CardText>
                      </CardBody>
                    </Card>
                    )
                });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comment}
            </div>);
        }else{
         return   <div></div>
        }
    }
const DishdetailComponent= (props)=>{
    if(props.dish != null){
        return (
            <div className="container">
                   <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish ? props.dish.name : null}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish ? props.dish.name : null}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <RenderSelectedDishComments comments={props.comments} />
                </div>
            </div>
            )
        }else{
            return   <div></div>
        }
    }
    


export default DishdetailComponent;