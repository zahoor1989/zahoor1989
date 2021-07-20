
import React from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

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
    const HomePage = () => {
        return(
            <Home 
            />
        );
      }
    return(
      <div>
        <Header />
        <Switch>
            <Route  path="/home" component={HomePage} />
            <Route  path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            {/* <Route  path="/aboutus" component={AboutUs} />
            <Route  path="/contactus" component={ContactUs} /> */}
            <Redirect to="/home" />
        </Switch>
           
            <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    )
  }
}

export default Main;
