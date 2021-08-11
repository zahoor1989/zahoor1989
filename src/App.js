import './App.css';
import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';

//define store
const store = configureStore();


class App extends React.Component{
  render(){
    return(
      <Provider store={store} >
        <BrowserRouter>
        <Main />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
