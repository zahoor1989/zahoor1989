import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function RenderCard({item}) {

  return(
      <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
          <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
  );

}


export default function Home(props){
    return(
      <div className="container">
      <div className="row align-items-start">
          <div className="col-12 col-md-4 mt-2">
              <RenderCard item={props.dish} />
          </div>
          <div className="col-12 col-md-4 mt-2">
              <RenderCard item={props.promotion} />
          </div>
          <div className="col-12 col-md-4 mt-2">
              <RenderCard item={props.leader} />
          </div>
      </div>
  </div>
      );
}