import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';


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
        return (comment)
        }else{
         return   <div></div>
        }
    }
const DishdetailComponent= (props)=>{
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                  <div className="col-12 col-md-5 m-1">
                      <h3>Comments</h3>
                  <RenderSelectedDishComments comments={props.dish ? props.dish.comments : null} />
                  </div>
            </div>
            )
        }
    


export default DishdetailComponent;