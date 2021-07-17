import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent';
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish:null
    }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  render(){
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" className="text-warning">Practice Application</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
         
      </div>
    )
  }
}

export default Main;
