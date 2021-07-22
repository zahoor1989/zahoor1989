import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';


const RenderMenu = ({dish})=>{
                return (   
                    <Card >
                        <CardImg  src={dish.image} alt={dish.name} />
                            <CardImgOverlay body="true" className="ml-5">
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
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
                    {menu}
                </div>
            </div>
        )
    };




export default Menu;