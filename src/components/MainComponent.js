
import React from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ContactUs from './ContactUsComponent';
import { Switch, Route, Redirect, Link} from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      comments:COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      selectedDish:null
    }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render(){
    const HomePage = () => {
        return(
            <Home dish={this.state.dishes.filter(dish => dish.featured)[0]}
                leader={this.state.leaders.filter(leader => leader.featured)[0]}
                promotion={this.state.promotions.filter(promo => promo.featured)[0]}
            />
        );
      }
      const DishDetail = ({match}) => {
            return <DishdetailComponent dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId,10))[0]}  
                                        comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}  />
      }
    return(
      <div>
        <Header />
        <Switch>
            <Route  path="/home" component={HomePage} />
            <Route  exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishDetail} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main;
