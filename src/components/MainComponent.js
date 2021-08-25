
import React from 'react';
import Menu from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ContactUs from './ContactUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {useState} from 'react'
import About from './AboutUsComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/commentActions';



const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });



//mapStateToProps
const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }


class Main extends React.Component{
  constructor(props){
    super(props);
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render(){
    const HomePage = () => {
        return(
            <Home dish={this.props.dishes.filter(dish => dish.featured)[0]}
                leader={this.props.leaders.filter(leader => leader.featured)[0]}
                promotion={this.props.promotions.filter(promo => promo.featured)[0]}
            />
        );
      }
      const DishDetail = ({match}) => {
            return <DishdetailComponent dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId,10))[0]}  
                                        comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}  
                                        addComment={this.props.addComment}/>
      }
    return(
            <div>
                <Header />
                <Switch>
                    <Route  path="/home" component={HomePage} />
                    <Route  exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishDetail} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Route exact  path="/contactus" component={() => <ContactUs />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer /> 
            </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));




// export default function MainComponent() {
//     const [dishes,setDishes] = useState(DISHES)
//     const [comments,setcomments] = useState(COMMENTS)
//     const [promotions,setpromotions] = useState(PROMOTIONS)
//     const [leaders,setleaders] = useState(LEADERS)
//     const [selectedDish,setSelectedDish] = useState(null)
//     const HomePage = () => {
//         return(
//             <Home dish={dishes.filter(dish => dish.featured)[0]}
//                 leader={leaders.filter(leader => leader.featured)[0]}
//                 promotion={promotions.filter(promo => promo.featured)[0]}
//             />
//         );
//       }
//       const DishDetail = ({match}) => {
//             return <DishdetailComponent dish={dishes.filter(dish => dish.id === parseInt(match.params.dishId,10))[0]}  
//                                         comments={comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}  />
//       }
//     return (
//         <div>
//             <Header />
//         <Switch>
//             <Route  path="/home" component={HomePage} />
//             <Route  exact path="/menu" component={() => <Menu dishes={dishes} />} />
//             <Route path="/menu/:dishId" component={DishDetail} />
//             <Route exact path="/aboutus" component={() => <About leaders={leaders} />} />
//             <Route exact  path="/contactus" component={() => <ContactUs />} />
//             <Redirect to="/home" />
//         </Switch>
//         <Footer /> 
//         </div>
//     )
// }

