import './App.css';
import React from 'react';
import Main from './components/MainComponent';


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
