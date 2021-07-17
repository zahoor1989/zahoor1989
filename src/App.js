import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Main from './components/MainComponent';
import {DISHES} from './shared/dishes';


class App extends React.Component{
  render(){
    return(
      <div className="container"> 
        <Main />
      </div>
    )
  }
}

export default App;
