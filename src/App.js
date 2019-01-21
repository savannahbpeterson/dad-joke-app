import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

//COMPONENTS
import Header from './Components/Header/Header'
import Getjoke from './Components/Getjoke/Getjoke'


class App extends Component {
  constructor(){
    super()
    this.state = {
      jokes: [],
    }
  }

  // componentDidMount(){
  //   axios.get('/api/whatever')
  // }
 
  render() {
    return (
      <div className="App">
        <Header />
        <Getjoke />
      </div>
    );
  }
}

export default App;
