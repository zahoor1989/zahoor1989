import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar dar color="primary">
          <div className="navbar-container">
            <NavbarBrand href="/">Practice Application</NavbarBrand>
          </div>
        </Navbar>
        
      </div>
    )
  }
}

export default App;
