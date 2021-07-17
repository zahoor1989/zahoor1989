import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
    }
    renderSelectedDish = (dish)=>{
        console.log(dish)
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
    renderSelectedDishComments = (comments)=>{
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
        return (comment)
        }else{
         return   <div></div>
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderSelectedDish(this.props.dish)}
                </div>
                  <div className="col-12 col-md-5 m-1">
                      <h3>Comments</h3>
                  {this.renderSelectedDishComments(this.props.dish ? this.props.dish.comments : null)}
                  </div>
            </div>
            )
        }
    }


export default DishdetailComponent;