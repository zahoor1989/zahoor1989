import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';


const RenderMenu = ({dish})=>{
                return (   
                    <Card >
                        <Link to={`/menu/${dish.id}`} >
                            <CardImg  src={dish.image} alt={dish.name} />
                            <CardImgOverlay body="true" className="ml-5">
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                    )
                }


const Menu = (props)=> {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                   <RenderMenu dish={dish} />
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div> 
                </div>
                
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    };




export default Menu;